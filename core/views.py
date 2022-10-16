import json

from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import TemplateView

from core import endpoints


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


class TaskListView(TemplateView):
    template_name = 'core/tasks.html'

    def get_context_data(self, **kwargs) -> dict:
        """
        Create normalised JSON for data (i.e. tasks) in order to be
        in an appropriate format for consumption by Alpinsjs
        """
        context = super().get_context_data(**kwargs)
        data = {'tasks': endpoints.tasks(self.request)}
        context['tasks'] = json.dumps(data)
        return context
