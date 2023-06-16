from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('events/', views.getEventList, name="events"),
    path('events/$batch', views.handleBatchRequest, name="batch_endpoint"),
    path('subjects/', views.getSubjects, name="subjects"),
    path('subjects/create/', views.createSubject, name='create-subjects'),
    path('subjects/<str:pk>/update/', views.updateSubject, name='update-subject'),
    path('subjects/<str:pk>/delete/', views.deleteSubject, name='delete-subject'),
]