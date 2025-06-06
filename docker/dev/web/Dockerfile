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
ENV POETRY_VERSION 1.4.2
RUN pip install poetry==${POETRY_VERSION}

# Copy the package management files into the container
COPY pyproject.toml poetry.lock ./

# Do not create a virtual environment
RUN poetry config virtualenvs.create false

# Install Poetry packages and dependencies (including dev packages)
RUN poetry install --no-interaction --no-ansi

# Copy the source code into working directory
COPY . .

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
