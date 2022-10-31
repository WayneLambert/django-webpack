# Pull official lightweight Node image
FROM node:alpine as webpack

# Create and set working directory
WORKDIR /code

# Copy the NPM package management files into the container
COPY ./package.json ./package-lock.json /code/

# Copy the webpack directory into the container
COPY ./webpack /code/webpack/

# Install the Node project's packages and dependencies in the container
RUN npm install

ADD static /code/static/

# Run webpack's build scripts to compile static assets
RUN npm run build


### <---------------------------- NEW STAGE -------------------------------> ###

# Pull official Python image. Label stage as `base`
FROM python:3.10.7-buster AS base

# Add metadata to the image
LABEL author="Wayne Lambert <wayne.a.lambert@gmail.com>" \
    version="2022.10" \
    description="Docker image for `web` service of Django Webpack in Dev"

# Prevents Python from writing .pyc files
ENV PYTHONDONTWRITEBYTECODE 1

# Causes all output to stdout to be flushed immediately
ENV PYTHONUNBUFFERED 1

# Set the COLUMNS variable for the terminal's output width
ENV COLUMNS 139

# Create and set working directory
WORKDIR /code

# Upgrade pip
RUN pip install --upgrade pip

# Install the specified version of Poetry
ENV POETRY_VERSION 1.2.1
RUN pip install poetry==${POETRY_VERSION}

# Copy the Poetry package management files into the container
COPY pyproject.toml poetry.lock ./

# Do not create a virtual environment
RUN poetry config virtualenvs.create false

# Install Poetry packages and dependencies (including dev packages)
RUN poetry install --no-interaction --no-ansi --no-dev

# Copy the source code into working directory
COPY . .

# Using result from previous build stage, copy from stage's location
# to destination
COPY --from=webpack /code/static/ /code/staticfiles/
COPY --from=webpack /code/webpack/ /code/webpack/

# Run Django's collection of static files
RUN python manage.py collectstatic --noinput

# Tidy up images by removing superfluous `static` directory
RUN rm -rf static

# Expose port 8040
EXPOSE 8040

# Add a new group for the app
ARG APP_GROUP=app-grp
RUN groupadd ${APP_GROUP}

# Add new user for app
ARG APP_USER=app-usr
RUN useradd --create-home --gid ${APP_GROUP} ${APP_USER}

# Recursively change the user:group of the directory
RUN chown -R ${APP_USER}:${APP_GROUP} .

# Change the user to the application user (i.e. non-root access)
USER ${APP_USER}

# Allows extensibility of entrypoint behaviour by using shell script
ENTRYPOINT [ "sh", "-c", "./docker/prod/web/entrypoint.sh" ]
