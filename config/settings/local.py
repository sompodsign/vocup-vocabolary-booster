from celery.schedules import crontab
from .base import *  # noqa
from .base import env

import config.tasks

# GENERAL
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#debug
DEBUG = True
# https://docs.djangoproject.com/en/dev/ref/settings/#secret-key
SECRET_KEY = env(
    "DJANGO_SECRET_KEY",
    default="m7tjuo4OnzZxJIb8fcqUbkuEdzoH6Jvw4Ul19DUb6dzRgMbPR5DQKM2hNL33BG7z",
)
# https://docs.djangoproject.com/en/dev/ref/settings/#allowed-hosts
ALLOWED_HOSTS = ["*"]

# CACHES
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#caches
CACHES = {
    "default": {
        "BACKEND": "django.core.cache.backends.locmem.LocMemCache",
        "LOCATION": "",
    }
}

# EMAIL
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#email-backend
EMAIL_BACKEND = env(
    "DJANGO_EMAIL_BACKEND", default="django.core.mail.backends.smtp.EmailBackend"
)
EMAIL_HOST = env(
    "DJANGO_EMAIL_HOST", default="smtp.gmail.com"
)
EMAIL_USE_TLS = env("DJANGO_EMAIL_USE_TSL", default=True)
EMAIL_PORT = env("DJANGO_EMAIL_PORT", default=587)
EMAIL_HOST_USER = env("DJANGO_EMAIL_HOST_USER", default="sompodsrkr@gmail.com")
EMAIL_HOST_PASSWORD = env("DJANGO_EMAIL_HOST_PASSWORD", default="123456")

# WhiteNoise
# ------------------------------------------------------------------------------
# http://whitenoise.evans.io/en/latest/django.html#using-whitenoise-in-development
INSTALLED_APPS = ["whitenoise.runserver_nostatic"] + INSTALLED_APPS  # noqa F405

# django-debug-toolbar
# ------------------------------------------------------------------------------
# https://django-debug-toolbar.readthedocs.io/en/latest/installation.html#prerequisites
INSTALLED_APPS += ["debug_toolbar"]  # noqa F405
# https://django-debug-toolbar.readthedocs.io/en/latest/installation.html#middleware
MIDDLEWARE += ["debug_toolbar.middleware.DebugToolbarMiddleware"]  # noqa F405
# https://django-debug-toolbar.readthedocs.io/en/latest/configuration.html#debug-toolbar-config
DEBUG_TOOLBAR_CONFIG = {
    # "DISABLE_PANELS": ["debug_toolbar.panels.redirects.RedirectsPanel"],
    # "SHOW_TEMPLATE_CONTEXT": True,
    "SHOW_TOOLBAR_CALLBACK": lambda request: False,
}
# https://django-debug-toolbar.readthedocs.io/en/latest/installation.html#internal-ips
INTERNAL_IPS = ["127.0.0.1", "10.0.2.2", 'localhost']
if env("USE_DOCKER") == "yes":
    import socket

    hostname, _, ips = socket.gethostbyname_ex(socket.gethostname())
    INTERNAL_IPS += [".".join(ip.split(".")[:-1] + ["1"]) for ip in ips]

# django-extensions
# ------------------------------------------------------------------------------
# https://django-extensions.readthedocs.io/en/latest/installation_instructions.html#configuration
INSTALLED_APPS += ["django_extensions"]  # noqa F405

# Your stuff...
# ------------------------------------------------------------------------------
ACCOUNT_AUTHENTICATION_METHOD = "email"
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_UNIQUE_EMAIL = True
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_USER_MODEL_USERNAME_FIELD = None

CORS_ALLOW_ALL_HEADERS = True

CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',
    'http://localhost:8000',
    'http://127.0.0.1:8000',
    'http://192.168.31.38:8000',
    'http://192.168.31.177:3000',
    'http://20.212.104.33:8000',
    'https://shampad.live',
    'https://shampad.live',
    'http://192.168.31.18:3000',
    'http://127.0.0.1:80',
    'http://192.168.31.18:3000',
    'http://192.168.31.38:3000',
    'http://192.168.31.38:80',

]

# http://docs.celeryproject.org/en/latest/userguide/configuration.html#task-eager-propagates
CELERY_TASK_EAGER_PROPAGATES = True
# Your stuff...
# ------------------------------------------------------------------------------
# CELERY_BEAT_SCHEDULE = {
#     "sample_task": {
#         "task": "config.tasks.sample_task",
#         "schedule": crontab(minute="*/1"),
#     },
# }
