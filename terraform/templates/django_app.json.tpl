[
    {
        "name": "django-app",
        "image": "${docker_image_url_django}",
        "essential": true,
        "cpu": 10,
        "memoryReservation": 512,
        "links": [],
        "portMappings": [
            {
                "containerPort": 8040,
                "hostPort": 0,
                "protocol": "tcp"
            }
        ],
        "environment": [
            {
                "name": "SECRET_KEY",
                "value": "${secret_key}"
            },
            {
                "name": "DJANGO_PROJECT_NAME",
                "value": "${django_project_name}"
            },
            {
                "name": "COMPOSE_PROJECT_NAME",
                "value": "${compose_project_name}"
            },
            {
                "name": "AWS_SES_ACCESS_KEY_ID",
                "value": "${aws_ses_access_key_id}"
            },
            {
                "name": "AWS_SES_SECRET_ACCESS_KEY",
                "value": "${aws_ses_secret_access_key}"
            },
            {
                "name": "EMAIL_HOST_SES",
                "value": "${aws_email_host_ses}"
            },
            {
                "name": "EMAIL_HOST_USER_SES",
                "value": "${aws_email_host_user_ses}"
            },
            {
                "name": "EMAIL_HOST_PASSWORD_SES",
                "value": "${aws_email_host_password_ses}"
            },
            {
                "name": "DEFAULT_FROM_EMAIL_SES",
                "value": "${aws_default_from_email_ses}"
            },
            {
                "name": "DJANGO_SETTINGS_MODULE",
                "value": "${django_settings_module}"
            },
            {
                "name": "ALLOWED_HOSTS",
                "value": "${allowed_hosts}"
            },
            {
                "name": "DEBUG",
                "value": "0"
            },
            {
                "name": "WEB_HOST",
                "value": "${web_host}"
            },
            {
                "name": "WEB_PORT",
                "value": "${web_port}"
            },
            {
                "name": "RDS_DB_NAME",
                "value": "${rds_db_name}"
            },
            {
                "name": "RDS_USERNAME",
                "value": "${rds_username}"
            },
            {
                "name": "RDS_PASSWORD",
                "value": "${rds_password}"
            },
            {
                "name": "RDS_HOSTNAME",
                "value": "${rds_hostname}"
            },
            {
                "name": "RDS_PORT",
                "value": "${rds_port}"
            }
        ],
        "logConfiguration": {
            "logDriver": "awslogs",
            "options": {
                "awslogs-group": "/ecs/django-app",
                "awslogs-region": "${region}",
                "awslogs-stream-prefix": "django-app-log-stream"
            }
        }
    },
    {
        "name": "nginx",
        "image": "${docker_image_url_nginx}",
        "essential": true,
        "cpu": 10,
        "memory": 128,
        "links": [
            "django-app"
        ],
        "portMappings": [
            {
                "containerPort": 80,
                "hostPort": 0,
                "protocol": "tcp"
            },
            {
                "containerPort": 443,
                "hostPort": 0,
                "protocol": "tcp"
            }
        ],
        "mountPoints": [
            {
                "containerPath": "/code/staticfiles",
                "sourceVolume": "static_data",
                "readOnly": true
            }
        ],
        "logConfiguration": {
            "logDriver": "awslogs",
            "options": {
                "awslogs-group": "/ecs/nginx",
                "awslogs-region": "${region}",
                "awslogs-stream-prefix": "nginx-log-stream"
            }
        }
    }
]
