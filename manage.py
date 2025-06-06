#!/usr/bin/env python
import os
import sys


if __name__ == '__main__':
    os.environ.setdefault(
        'DJANGO_SETTINGS_MODULE',
        os.getenv('DJANGO_SETTINGS_MODULE', default='aa_project.settings.prod'),
    )

    try:
        from django.conf import settings
        from django.core.management import execute_from_command_line

        if bool(int(os.getenv('DEBUG', 0))):
            from rich import pretty, traceback

            pretty.install()
            traceback.install()

            if os.environ.get('RUN_MAIN') or os.environ.get('WERKZEUG_RUN_MAIN'):
                import ptvsd

                ptvsd.enable_attach(address=('0.0.0.0', os.getenv('DEBUG_PORT')))
                print("Attached remote debugger to Docker container")

    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc

    execute_from_command_line(sys.argv)
