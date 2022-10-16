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
            'start': task.created_date.strftime('%Y-%m-%dT%H:%M:%S'),
            'end': task.updated_date.strftime('%Y-%m-%dT%H:%M:%S'),
        }
        for task in tasks
    ]
