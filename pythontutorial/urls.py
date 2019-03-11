from django.conf.urls import url, include
from . import views
from django.urls import path

urlpatterns = [
          path('ckeditor/', include('ckeditor_uploader.urls')),
          path('python', views.pythonlang, name='python'),
          path('html_language', views.htmllang, name='html_language'),
          url(r'^python_overview/(?P<page>[0-9]+)/$', views.python_tutorial, name='python_overview'),
          url(r'^html_tutorial/(?P<page>[0-9]+)/$', views.html_tutorial, name='html_tutorial'),
          path('videofile', views.showvideos, name='videofile')

    ]
