resource "aws_db_subnet_group" "production" {
  name       = "main"
  subnet_ids = [aws_subnet.private-subnet-1.id, aws_subnet.private-subnet-2.id]
}

resource "aws_db_instance" "production" {
  identifier              = var.rds_db_identifier
  db_name                 = var.rds_db_name
  username                = var.rds_username
  password                = var.rds_password
  port                    = var.rds_port
  engine                  = "postgres"
  engine_version          = "13.7"
  instance_class          = var.rds_instance_class
  allocated_storage       = "20"
  storage_encrypted       = false
  vpc_security_group_ids  = [aws_security_group.rds.id]
  db_subnet_group_name    = aws_db_subnet_group.production.name
  multi_az                = false
  storage_type            = "gp2"
  publicly_accessible     = false
  backup_retention_period = 7
  skip_final_snapshot     = true
}
