from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import ListView

from .models import Task


def home(request):
    """Home page with instructions and nav links"""
    return render(request, "home.html", {})


def appointments(request):
    """Example returning Flatpickr integration"""
    return render(request, "appointments.html", {})


def area_of_circle(request):
    """
    Example returning calculation for the area of a circle using a
    TypeScript function
    """
    return render(request, "area_of_circle.html", {})


def htmx(request):
    """Page giving option to run an HTMX request for simple text"""
    return render(request, "htmx.html", {})


def hx_fetch_htmx(request):
    """
    Example returning simple text into a placeholder div demonstrating
    HTMX usage/integration
    """
    return HttpResponse('HTMX Response inserted into DOM')


def alpine(request):
    """
    Example toggling simple text into a div demonstrating Alpine.js
    usage/integration
    """
    return render(request, "alpine.html", {})


class TaskListView(ListView):
    model = Task
    template_name = 'tasks.html'
    context_object_name = 'tasks'
