from django.contrib import admin

# Register your models here.

from .models import Event, Subject

admin.site.register(Event)
admin.site.register(Subject)