#!/bin/sh

# Initialise the container with Gunicorn/Uvicorn config
gunicorn --config './docker/prod/web/gunicorn.conf.py'
