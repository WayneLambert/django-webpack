from django.contrib import admin

from core.models import Task


class TaskAdmin(admin.ModelAdmin):
    model = Task
    list_display = (
        'title',
        'desc',
        'is_priority',
        'created_by',
        'created_date',
        'updated_date',
    )
    ordering = ('created_date',)


admin.site.register(Task, TaskAdmin)
