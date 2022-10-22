from aa_project.settings.base import *


DEBUG = False

ALLOWED_HOSTS = os.environ.get("ALLOWED_HOSTS").split(" ")
# ALLOWED_HOSTS = ['*']

# Static files
STATICFILES_STORAGE = 'whitenoise.storage.CompressedStaticFilesStorage'

# Changes suggested from $ python manage.py check --deploy
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_BROWSER_XSS_FILTER = True
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
X_FRAME_OPTIONS = 'DENY'
SECURE_HSTS_SECONDS = 2592000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
SECURE_REFERRER_POLICY = 'same-origin'

# URL scheme for building URIs
EXTERNAL_URL_SCHEME = 'https'

# webpack Integration
WEBPACK_LOADER = {
    'DEFAULT': {
        'CACHE': not DEBUG,
        'STATS_FILE': Path(BASE_DIR / 'webpack/setup/stats.json'),
        'POLL_INTERVAL': 0.1,
        'IGNORE': [r'.+\.hot-update.js', r'.+\.map'],
        'SKIP_COMMON_CHUNKS': True,
    }
}
