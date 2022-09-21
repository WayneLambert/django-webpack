from django.http import HttpResponse
from django.shortcuts import render


def wp_examples(request):
    """Example returning Webpack integration examples"""
    return render(request, "wp_examples.html", {})


def htmx_example(request):
    """
    Example returning simple text into a div demonstrating HTMX
    usage/integration
    """
    return HttpResponse("Test HTMX text")
