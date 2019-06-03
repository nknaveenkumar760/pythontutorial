from django.conf.urls import url, include
from . import views
from django.urls import path

urlpatterns = [

          path('payment', views.process_payment, name='payment'),
          path('payment_done', views.payment_done, name='payment_done'),
          path('payment_canceled', views.payment_canceled, name='payment_canceled'),

    ]