from django.urls import path

from . import views


urlpatterns = [
    path("wp-examples/", views.wp_examples, name="wp_examples"),
    path("hx-htmx-example/", views.htmx_example, name="htmx_example"),
]
