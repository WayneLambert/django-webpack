output "alb_hostname" {
  value = aws_lb.production.dns_name
}

output "launch_configuration" {
  value = aws_lb.production.name
}

output "cluster" {
  value = aws_ecs_cluster.production.name
}

output "task_family" {
  value = aws_ecs_task_definition.app.family
}

output "service" {
  value = aws_ecs_service.production.name
}
