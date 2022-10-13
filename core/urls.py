from django.urls import path

from . import views


app_name = "core"

urlpatterns = [
    path("", views.home, name="home"),
    path("appointments/", views.appointments, name="appointments"),
    path("area-of-circle/", views.area_of_circle, name="area_of_circle"),
    path("htmx/", views.htmx, name="hx_htmx"),
    path("hx-fetch-htmx/", views.hx_fetch_htmx, name="hx_fetch_htmx"),
    path("alpine/", views.alpine, name="alpine"),
    path('tasks/', views.TaskListView.as_view(), name='tasks'),
]
