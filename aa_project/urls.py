import contextlib

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

from core.endpoints import api


urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/', api.urls),
    path("", include("core.urls", namespace="core")),
]


# Django Debug Toolbar Settings
if settings.DEBUG:
    with contextlib.suppress(ModuleNotFoundError):
        import debug_toolbar

        urlpatterns += [
            path('__debug__/', include(debug_toolbar.urls)),
        ]
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_URL)
