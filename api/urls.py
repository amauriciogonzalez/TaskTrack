from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('events/', views.getEventList, name="events"),
    path('events/$batch', views.handleBatchRequest, name="batch_endpoint"),
]