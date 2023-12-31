from django.db import models

# Create your models here.

class Event(models.Model):
    Subject = models.CharField(max_length=200)
    Location = models.CharField(max_length=200, null=True)
    StartTime = models.DateTimeField()
    EndTime = models.DateTimeField()
    Description = models.TextField(blank=True)
    IsAllDay = models.BooleanField(default=False)

    def __str__(self):
        return self.Subject

class Subject(models.Model):
    Name = models.CharField(max_length=200, default='Name')
    Color = models.CharField(max_length=7, default='#000000')