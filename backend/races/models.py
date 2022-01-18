from django.db import models

# Create your models here.
from core.models import BaseModel


class Race(BaseModel):
    name = models.CharField(max_length=256)
    description = models.TextField()
    start_time = models.DateTimeField()

