# Use official image for Nginx
FROM nginx:1.23.1-alpine

# Add metadata to the image
LABEL prod.waynelambert.author="Wayne Lambert <wayne.a.lambert@gmail.com>" \
    prod.waynelambert.version="2022.10" \
    prod.waynelambert.description="Docker image for nginx service"

RUN rm /etc/nginx/conf.d/default.conf

# Copy nginx.conf config file into the container
COPY ./docker/prod/nginx/nginx.conf /etc/nginx/conf.d
