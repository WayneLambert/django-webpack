import os

from django.conf import settings


wsgi_app = f"{os.environ['DJANGO_PROJECT_NAME']}.asgi:application"
bind = f"{os.environ['WEB_HOST']}:{os.environ['WEB_PORT']}"
workers = 4
reload = True  # TODO: Remove for Prod
worker_class = "aa_project.workers.ProjectUvicornWorker"
loglevel = "debug"  # TODO: Remove for Prod
forwarded_allow_ips = '*'
