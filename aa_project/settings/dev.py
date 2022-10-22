from aa_project.settings.base import *


DEBUG = True
ALLOWED_HOSTS = ['*']

# Django Debug Toolbar Settings
INTERNAL_IPS = [
    "127.0.0.1",
    "0.0.0.0",
    "172.28.1.1",
]

# For Django Debug Toolbar and Django Extensions to be used in dev
INSTALLED_APPS += [
    'debug_toolbar',
]

# For Django Debug Toolbar to be used in local dockerized dev environment
DEBUG_TOOLBAR_CONFIG = {'SHOW_TOOLBAR_CALLBACK': lambda request: DEBUG}

# Additional Middleware
MIDDLEWARE += [
    'debug_toolbar.middleware.DebugToolbarMiddleware',  # Third party
]

DEBUG_TOOLBAR_PANELS = [
    "debug_toolbar.panels.versions.VersionsPanel",
    "debug_toolbar.panels.timer.TimerPanel",
    "debug_toolbar.panels.settings.SettingsPanel",
    "debug_toolbar.panels.headers.HeadersPanel",
    "debug_toolbar.panels.request.RequestPanel",
    "debug_toolbar.panels.sql.SQLPanel",
    "debug_toolbar.panels.staticfiles.StaticFilesPanel",
    "debug_toolbar.panels.templates.TemplatesPanel",
    "debug_toolbar.panels.cache.CachePanel",
    "debug_toolbar.panels.signals.SignalsPanel",
    "debug_toolbar.panels.logging.LoggingPanel",
    "debug_toolbar.panels.profiling.ProfilingPanel",
    "debug_toolbar.panels.redirects.RedirectsPanel",
]
SHOW_TOOLBAR_CALLBACK = True


def skip_debug_toolbar_requests(record):
    """Prevent logging of debug toolbar requests to the console"""
    return not str(record.args[0]).startswith('GET /static/debug_toolbar/')


# Logging Configuration (including colorised output from Rich)
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'filters': {
        'skip_debug_toolbar_requests': {
            '()': 'django.utils.log.CallbackFilter',
            'callback': skip_debug_toolbar_requests,
        },
        'require_debug_true': {
            '()': 'django.utils.log.RequireDebugTrue',
        },
    },
    'formatters': {
        'rich': {'datefmt': '[%X]'},
    },
    'handlers': {
        'console': {
            'class': 'rich.logging.RichHandler',
            'formatter': 'rich',
            'level': 'INFO',
            'filters': ['skip_debug_toolbar_requests', 'require_debug_true'],
            'rich_tracebacks': True,
            'tracebacks_show_locals': True,
        }
    },
    'loggers': {
        'django': {
            'handlers': ['console'],
            'level': 'INFO',
            'propagate': False,
        },
        'django.db.backends': {
            'handlers': ['console'],
            'level': 'DEBUG',
        },
    },
}

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
