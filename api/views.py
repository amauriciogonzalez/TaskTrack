from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import api_view, parser_classes, renderer_classes
from rest_framework.parsers import JSONParser, MultiPartParser
from .serializers import EventSerializer
from .models import Event

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
    ]
    return Response(routes)

@api_view(['GET'])
def getEventList(request):
    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)

@api_view(['POST'])  # Specify the HTTP methods allowed for this view
def handleBatchRequest(request):
    data = request.data  # Get the request data
    # Process each operation in the batch request
    responses = []
    for operation in data:
        pass
        # Handle each operation individually

        # Perform necessary validations, data manipulation, and database operations

        # Append the response for each operation to the `responses` list

    return Response(responses)  # Return the responses for each operation
