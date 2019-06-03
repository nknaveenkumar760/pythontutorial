from __future__ import unicode_literals

from django.conf.urls import url
from django.urls import path
from . import views


app_name = "blog"

urlpatterns = [

    path('bloglist', views.post_list, name='bloglist'),
    path('<slug:post>', views.post_detail, name='post_detail'),
    path('<int:post_id>/share/', views.post_share, name='post_share'),
    path('tag/<slug:tag_slug>/', views.post_list, name='post_list_by_tag'),

]
