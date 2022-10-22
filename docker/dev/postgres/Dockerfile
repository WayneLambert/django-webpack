# Use official Postgres image as the base image
FROM postgres:14.4

# Add metadata to the image
LABEL dev.waynelambert.author="Wayne Lambert <wayne.a.lambert@gmail.com>" \
    dev.waynelambert.version="2022.10" \
    dev.waynelambert.description="Docker image for postgres dev database for Django Webpack"

# Run the rest of the commands as the 'postgres' user
USER postgres

# Update permissions for the data folder of the Postgres database
RUN chmod 0700 /var/lib/postgresql/data

# Creates a new PostgreSQL database cluster
RUN initdb -D /var/lib/postgresql/data

# Temporarily enable trusted mode so that the postgres user password can be changed/secured
RUN echo "host all  all    0.0.0.0/0  trust" >> /var/lib/postgresql/data/pg_hba.conf

# Allow incoming connections on all available IP interfaces
RUN echo "listen_addresses='*'" >> /var/lib/postgresql/data/postgresql.conf

# Make the database initialization script available and run it
COPY init.sql /docker-entrypoint-initdb.d/

# Ensure security is added back to the Postgres config file
RUN echo "host all  all    0.0.0.0/0  md5" >> /var/lib/postgresql/data/pg_hba.conf
