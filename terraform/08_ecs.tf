# ECS Cluster Configuration

resource "aws_ecs_cluster" "production" {
  name = "${var.ecs_cluster_name}-cluster"
}

resource "aws_launch_configuration" "ecs" {
  name                        = "${var.ecs_cluster_name}-cluster"
  image_id                    = lookup(var.ami, var.region)
  instance_type               = var.instance_type
  security_groups             = [aws_security_group.ecs.id]
  iam_instance_profile        = aws_iam_instance_profile.ecs.name
  key_name                    = aws_key_pair.production.key_name
  associate_public_ip_address = true
  user_data                   = "${file("scripts/init.sh")}"
  enable_monitoring = true
  lifecycle {
    create_before_destroy = true
  }
}

data "template_file" "app" {
  template = file("templates/django_app.json.tpl")

  vars = {
    docker_image_url_django     = var.docker_image_url_django
    docker_image_url_nginx      = var.docker_image_url_nginx
    region                      = var.region
    secret_key                  = var.secret_key
    django_project_name         = var.django_project_name
    compose_project_name        = var.compose_project_name
    django_settings_module      = var.django_settings_module
    allowed_hosts               = var.allowed_hosts
    web_host                    = var.web_host
    web_port                    = var.web_port
    aws_ses_access_key_id       = var.aws_ses_access_key_id
    aws_ses_secret_access_key   = var.aws_ses_secret_access_key
    aws_email_host_ses          = var.aws_email_host_ses
    aws_email_host_user_ses     = var.aws_email_host_user_ses
    aws_email_host_password_ses = var.aws_email_host_password_ses
    aws_default_from_email_ses  = var.aws_default_from_email_ses
    rds_db_identifier           = var.rds_db_identifier
    rds_db_name                 = var.rds_db_name
    rds_username                = var.rds_username
    rds_password                = var.rds_password
    rds_port                    = var.rds_port
    rds_hostname                = aws_db_instance.production.address
    certificate_arn             = var.certificate_arn
  }
}

resource "aws_ecs_task_definition" "app" {
  family                = "django-app"
  container_definitions = data.template_file.app.rendered
  depends_on            = [aws_db_instance.production]

  volume {
    name      = "static_data"
    host_path = "/code/staticfiles/"
  }
}

resource "aws_ecs_service" "production" {
  name            = "${var.ecs_cluster_name}-service"
  cluster         = aws_ecs_cluster.production.id
  task_definition = aws_ecs_task_definition.app.arn
  iam_role        = aws_iam_role.ecs-service-role.arn
  desired_count   = var.app_count
  depends_on      = [aws_alb_listener.ecs-alb-http-listener, aws_iam_role_policy.ecs-service-role-policy]

  load_balancer {
    target_group_arn = aws_alb_target_group.default-target-group.arn
    container_name   = "nginx"
    container_port   = 80
  }
}
