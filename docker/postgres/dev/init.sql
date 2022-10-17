-- Database initialisation procedure. Passwords are changed over during the manual setup
-- phase and are only here to serve as placeholders for user initialisation.

-- Set environment variables
\set db_name django_webpack_db
\set db_owner app_owner
\set db_pass '\'catgftitw\''

-- Alter the default postgres user to have an encrypted password
ALTER USER postgres WITH ENCRYPTED PASSWORD :db_pass;

-- Create a new superuser with an encrypted password
CREATE USER :db_owner WITH SUPERUSER ENCRYPTED PASSWORD :db_pass VALID UNTIL 'infinity';

-- Create the initial database and assign ownership to new user
CREATE DATABASE :db_name OWNER :db_owner;

-- Grant all rights and privileges to the newly created database to the newly created superuser
GRANT ALL PRIVILEGES ON DATABASE :db_name TO :db_owner;
