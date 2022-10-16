from typing import List

from ninja import NinjaAPI

from core.models import Task
from core.schemas import TaskSchema


api = NinjaAPI(
    title='Tasks API',
    version='1.0.0',
    docs_url='docs/v1.0.0/',
    urls_namespace='core:tasks:api-1.0.0',
)


@api.get("/tasks/", response=List[TaskSchema])
def tasks(request):
    tasks = Task.objects.all()
    return [
        {
            'id': task.id,
            'title': task.title,
            'desc': task.desc,
            'is_priority': task.is_priority,
            'created_by': task.created_by.get_full_name(),
            'created_date': task.created_date.strftime('%d-%b-%Y %H:%M'),
            'updated_date': task.updated_date.strftime('%d-%b-%Y %H:%M'),
        }
        for task in tasks
    ]
