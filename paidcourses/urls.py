from django.urls import path
from . import views


urlpatterns = [

    path('android_syllabus', views.androidsyllabus, name='android_syllabus')
]