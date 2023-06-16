from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Event, Subject


class EventSerializer(ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class SubjectSerializer(ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'