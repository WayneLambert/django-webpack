from django.shortcuts import render


def bs_wp_examples(request):
    """Example returning Webpack integration examples"""
    return render(request, "bs_wp_examples.html", {})
