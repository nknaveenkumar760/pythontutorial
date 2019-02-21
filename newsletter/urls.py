from django.urls import path
from . import views


urlpatterns = [

          path('sbscription', views.sbscription, name='sbscription'),

    ]