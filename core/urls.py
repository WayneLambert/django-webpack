from django.urls import path

from . import views

urlpatterns = [path("bs-wp-examples/", views.bs_wp_examples, name="bs_wp_examples")]
