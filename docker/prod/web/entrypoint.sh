#!/bin/sh

# Apply the database migrations
echo "Applying database migrations..."
python manage.py migrate

# Initialise the container with Gunicorn/Uvicorn config
echo "Starting uvicorn server..."
gunicorn --config './docker/prod/web/gunicorn.conf.py'
