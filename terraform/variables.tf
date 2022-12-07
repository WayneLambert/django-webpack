# Core
variable "region" {
  description = "The AWS region to create resources in."
  default     = "eu-west-2"
}

# Networking
variable "public_subnet_1_cidr" {
  description = "CIDR Block for Public Subnet 1"
  default     = "10.0.1.0/24"
}
variable "public_subnet_2_cidr" {
  description = "CIDR Block for Public Subnet 2"
  default     = "10.0.2.0/24"
}
variable "private_subnet_1_cidr" {
  description = "CIDR Block for Private Subnet 1"
  default     = "10.0.3.0/24"
}
variable "private_subnet_2_cidr" {
  description = "CIDR Block for Private Subnet 2"
  default     = "10.0.4.0/24"
}
variable "availability_zones" {
  description = "Availability zones"
  type        = list(string)
  default     = ["eu-west-2a", "eu-west-2b", "eu-west-2c"]
}

# Load Balancer
variable "health_check_path" {
  description = "Health check path for the default target group"
  default     = "/ping/"
}

# Elastic Container Service (ECS)
variable "ecs_cluster_name" {
  description = "Name of the ECS cluster"
  default     = "production"
}
variable "ami" {
  default = {
    eu-west-2 = "ami-0d930fe5ea148b740"
  }
  description = "Which Amazon Machine Image (AMI) to spawn."
}
variable "instance_type" {
  type = string
  default = "t2.micro"
}
variable "docker_image_url_django" {
  description = "Docker image to run in the ECS cluster"
  default     = "990695153052.dkr.ecr.eu-west-2.amazonaws.com/prod-wl-django-webpack-web:latest"
}
variable "docker_image_url_nginx" {
  description = "Docker image to run in the ECS cluster"
  default     = "990695153052.dkr.ecr.eu-west-2.amazonaws.com/prod-wl-django-webpack-nginx:latest"
}
variable "app_count" {
  description = "Number of Docker containers to run"
  default     = 2
}
variable "allowed_hosts" {
  description = "Domain name for allowed hosts"
  default     = "wl-django-webpack.com"
}

# Cloudwatch Logs
variable "log_retention_in_days" {
  default = 30
}

# Key Pair
variable "ssh_pubkey_file" {
  description = "Path to an SSH public key"
  default     = "~/.ssh/id_aws.pub"
}

# Auto Scaling
variable "autoscale_min" {
  description = "Minimum autoscale (number of EC2)"
  default     = "1"
}
variable "autoscale_max" {
  description = "Maximum autoscale (number of EC2)"
  default     = "10"
}
variable "autoscale_desired" {
  description = "Desired autoscale (number of EC2)"
  default     = "4"
}

# Project
variable "secret_key" {
  description = "Secret Key for project"
}
variable "django_project_name" {
  description = "Project name"
}
variable "compose_project_name" {
  description = "Project name for Docker compose"
}
variable "django_settings_module" {
  description = "Module for configuration settings for Django project"
}
variable "allowed_host" {
  description = "List of allowed hosts for the application"
}
variable "web_host" {
  description = "Web host for the application"
}
variable "web_port" {
  description = "Web port for the application"
}

# AWS
variable "aws_ses_access_key_id" {
  description = "SES access key ID"
}
variable "aws_ses_secret_access_key_id" {
  description = "SES secret access key"
}
variable "aws_email_host_ses" {
  description = "SES email host"
}
variable "aws_email_host_user_ses" {
  description = "SES email host user"
}
variable "aws_email_host_password_ses" {
  description = "SES email host user password"
}
variable "aws_default_from_email_ses" {
  description = "SES email default from email"
}

# RDS
variable "rds_db_identifier" {
  description = "RDS database identifier name"
}
variable "rds_db_name" {
  description = "RDS database name"
}
variable "rds_username" {
  description = "RDS database username"
}
variable "rds_password" {
  description = "RDS database password"
}
variable "rds_port" {
  description = "RDS port"
}
variable "rds_instance_class" {
  description = "RDS instance type"
  default     = "db.t3.micro"
}

# Domain
variable "certificate_arn" {
  description = "AWS Certificate Manager ARN for validated domain"
}
