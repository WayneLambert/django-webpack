from django.urls import path

from . import views


app_name = "core"

urlpatterns = [
    path("home/", views.home, name="home"),
    path("flatpickr/", views.flatpickr, name="flatpickr"),
    path("users-api/", views.users_api, name="users_api"),
    path("area-of-circle/", views.area_of_circle, name="area_of_circle"),
    path("htmx/", views.htmx, name="hx_htmx"),
    path("hx-fetch-htmx/", views.hx_fetch_htmx, name="hx_fetch_htmx"),
    path("alpine/", views.alpine, name="alpine"),
]
