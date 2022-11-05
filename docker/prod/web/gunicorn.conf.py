import os


wsgi_app = f"{os.environ['DJANGO_PROJECT_NAME']}.asgi:application"
bind = f"{os.environ['WEB_HOST']}:{os.environ['WEB_PORT']}"
workers = 4
worker_class = f"{os.environ['DJANGO_PROJECT_NAME']}.workers.ProjectUvicornWorker"
forwarded_allow_ips = '*'

# Debugging aids when deploying Prod build locally
# reload = True
# loglevel = "debug"
