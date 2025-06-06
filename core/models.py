from django.conf import settings
from django.contrib.auth import get_user_model
from django.db import models


class Task(models.Model):
    title = models.CharField(max_length=255)
    desc = models.TextField()
    is_priority = models.BooleanField(default=False)
    created_by = models.ForeignKey(
        get_user_model(), related_name='tasks', on_delete=models.CASCADE
    )

    # Date fields
    created_date = models.DateTimeField(auto_now_add=True, editable=False)
    updated_date = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('created_date',)
