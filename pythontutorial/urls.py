from django.conf.urls import url, include
from . import views


urlpatterns = [
          url('ckeditor/', include('ckeditor_uploader.urls')),
          url('python/', views.pythonlang, name='python'),
          url('html/', views.htmllang, name='html'),
          url(r'^python_overview/(?P<page>[0-9]+)/$', views.python_tutorial, name='python_overview'),
          url(r'^html_tutorial/(?P<page>[0-9]+)/$', views.html_tutorial, name='html_tutorial'),
          url('videofile/', views.showvideos, name='videofile')

    ]