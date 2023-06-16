from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import api_view, parser_classes, renderer_classes
from rest_framework.parsers import JSONParser, MultiPartParser
from .serializers import EventSerializer, SubjectSerializer
from .models import Event, Subject

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/events/',
            'method': 'GET',
            'description': 'Returns an array of images'
        },
        {
            'Endpoint': '/events/$batch',
        },
        {
            'Endpoint': '/subjects/',
        },
        {
            'Endpoint': '/subjects/create/'
        },
        {
            'Endpoint': '/subjects/id/update/'
        },
        {
            'Endpoint': '/subjects/id/delete/'
        },
    ]
    return Response(routes)

@api_view(['GET'])
def getEventList(request):
    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)

@api_view(['POST']) 
def handleBatchRequest(request):
    data = request.data
    responses = []
    for operation in data:
        pass

    return Response(responses)


@api_view(['GET'])
def getSubjects(request):
    subjects = Subject.objects.all()
    serializer = SubjectSerializer(subjects, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def createSubject(request):
    data = request.data
    subject = Subject.objects.create(
        Color=data['Color'],
        Name=data['Name']
    )
    serializer = SubjectSerializer(subject, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateSubject(request, pk):
    data = request.data
    subject = Subject.objects.get(id=pk)
    serializer = SubjectSerializer(instance=subject, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deleteSubject(request, pk):
    subject = Subject.objects.get(id=pk)
    subject.delete()
    return Response('Subject was deleted.')
    