from django.db import models

# Create your models here.
from core.models import BaseModel


class Race(BaseModel):
    name = models.CharField(max_length=256)
    description = models.TextField()
    start_time = models.DateTimeField()


class Participant(BaseModel):
    name = models.CharField(max_length=256)
    email = models.CharField(max_length=256)
    start_nr = models.IntegerField()
    race = models.ForeignKey(to=Race, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        if not self.pk:
            self.start_nr = Participant.objects.filter(race=self.race).count() + 1
        super(Participant, self).save(*args, **kwargs)


class Result(BaseModel):
    participant = models.ForeignKey(to=Participant, on_delete=models.CASCADE)
    race = models.ForeignKey(to=Race, on_delete=models.CASCADE)
    start = models.DateTimeField(blank=True, null=True)
    finish = models.DateTimeField(blank=True, null=True)
