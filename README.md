# Django Webpack Example

This repository contains examples of Webpack configuration with Django.

It includes patterns using code splitting using multiple entry points and dynamic imports.

It is also used to:

- Run experiments with webpack
- Experiment with HTMX
- Experiment with Alpine.js
- Integrate third-party JavaScript libraries
- Setup of reverse proxy with nginx
- Setup of nginx for serving static files
- Setup of Uvicorn using Gunicorn workers
- Demonstration of serving API endpoints using Django Ninja
- Canonical reference for a project structure

## Running the Project in Development

- Clone the repository
- Ensure everything is installed with `npm install`
- In one terminal instance, bring up the webpack dev server with `npm run dev`
- In another terminal instance, build the dev images with `docker compose build`
- In that second instance, bring the Django dev server up with `docker compose up`

## Running the Project in Production (Locally)

- Clone the repository
- Ensure the nginx directives within the `nginx.conf` file refers to the `0.0.0.0` server
- Build the prod images with `docker compose --file docker-compose.prod.yml build`
- Bring the prod containers up with `docker compose --file docker-compose.prod.yml up`
