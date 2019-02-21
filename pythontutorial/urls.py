from django.conf.urls import url, include
from . import views


urlpatterns = [
          url('ckeditor/', include('ckeditor_uploader.urls')),
          url('python/', views.pythonlang, name='python'),
          url(r'^python_overview/(?P<page>[0-9]+)/$', views.python_overview, name='python_overview'),
          url('videofile', views.showvideos, name='videofile')

    ]