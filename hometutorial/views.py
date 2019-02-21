from django.shortcuts import render

# Create your views here.


def index(request):

    return render(request, 'index.html')


def teachers(request):

    return render(request, 'teachers.html')


def courses(request):

    return render(request, 'courses.html')


def event(request):

    return render(request, 'event.html')


def news(request):

    return render(request, 'news.html')


def about(request):

    return render(request, 'about.html')


def contact(request):

    return render(request, 'contact.html')


def all_course(request):

    return render(request, 'all_course.html')


def mobileapp(request):

    return render(request, 'mobileapp.html')


def login(request):

    return render(request, 'login.html')


def signup(request):

    return render(request, 'signup.html')