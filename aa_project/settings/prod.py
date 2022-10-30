from aa_project.settings.base import *


ALLOWED_HOSTS = os.getenv("ALLOWED_HOSTS", "").split(" ")
DEBUG = False

# Database Configuration
DATABASES = {'default': {'ENGINE': 'django.db.backends.sqlite3', 'NAME': BASE_DIR / 'db.sqlite3'}}

# Django SES Email Backend Settings
EMAIL_BACKEND = 'django_ses.SESBackend'
AWS_SES_REGION_NAME = 'eu-west-1'
AWS_SES_REGION_ENDPOINT = 'email.eu-west-1.amazonaws.com'
AWS_SES_ACCESS_KEY_ID = os.getenv('AWS_SES_ACCESS_KEY_ID', '')
AWS_SES_SECRET_ACCESS_KEY = os.getenv('AWS_SES_SECRET_ACCESS_KEY', '')
EMAIL_HOST_SES = os.getenv('EMAIL_HOST_SES', '')
EMAIL_HOST_USER_SES = os.getenv('EMAIL_HOST_USER_SES', '')
EMAIL_HOST_PASSWORD_SES = os.getenv('EMAIL_HOST_PASSWORD_SES', '')
EMAIL_PORT = 587
EMAIL_USE_TLS = True
DEFAULT_FROM_EMAIL = os.getenv('DEFAULT_FROM_EMAIL_SES', '')
SERVER_EMAIL = os.getenv('DEFAULT_FROM_EMAIL_SES', '')
ADMINS = [
    ('Wayne', 'wayne.a.lambert@gmail.com'),
]

# Changes suggested from $ python manage.py check --deploy
# SECURE_CONTENT_TYPE_NOSNIFF = True
# SECURE_BROWSER_XSS_FILTER = True
# SECURE_SSL_REDIRECT = True
# SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
# X_FRAME_OPTIONS = 'DENY'
# SECURE_HSTS_SECONDS = 2592000
# SECURE_HSTS_INCLUDE_SUBDOMAINS = True
# SECURE_HSTS_PRELOAD = True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
# SECURE_REFERRER_POLICY = 'same-origin'
SECURE_CROSS_ORIGIN_OPENER_POLICY = None

# Enables form submissions on the site
CSRF_TRUSTED_DOMAINS = ['https://www.wl-django-webpack.com']

# Allows dynamic IPs from Amazon ECS. Validates '*' in ALLOWED_HOSTS
ALLOWED_CIDR_NETS = ['172.17.0.0/16']

# URL scheme for building URIs
EXTERNAL_URL_SCHEME = 'https'
