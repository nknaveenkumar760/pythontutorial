from django.urls import path
from .import views


urlpatterns = [

    path('', views.home, name='index'),
    path('teachers', views.teachers, name='teachers'),
    path('courses', views.courses, name='courses'),
    path('about', views.about, name='about'),
    path('contact', views.contact, name='contacts'),
    path('event', views.event, name='event'),
    path('<slug:data>/event_details', views.event_detail, name='event_details'),
    path('news', views.news, name='news'),
    path('all_course', views.all_course, name='all_course'),
    path('mobileapp', views.mobileapp, name='mobileapp'),
    path('login', views.login, name='login'),
    path('forget_password', views.forget_password, name="forget_password"),
    path('signup', views.signup, name='signup'),
    path('registration', views.registration, name='registration'),
    path('member_login', views.auth_and_login, name='member_login'),
    path('logout', views.logouts, name='logout'),

    
]