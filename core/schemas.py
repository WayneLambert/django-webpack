from datetime import datetime

from ninja import Schema


class TaskSchema(Schema):
    title: str
    desc: str
    is_priority: bool
    created_date: datetime
    updated_date: datetime


class NotFoundSchema(Schema):
    message: str
