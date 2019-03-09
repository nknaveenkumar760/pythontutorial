from django.shortcuts import render, HttpResponse, redirect
from .models import Registration, Login


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


def registration(request):

    email = request.POST.get('email')
    if request.method == 'POST':

        dataexits = Registration.objects.all().filter(email=email)
        print(dataexits)

        if dataexits:

            messages = "Email-id already exist"
            return HttpResponse(messages)

        elif dataexits is not None:

            registrationrecord = Registration(request.POST['uniqueid'], request.POST['name'], request.POST['email'],
                                              request.POST['password'], request.POST['phone'], )

            registrationrecord.save()

            message = "Registration Successfully"
        else:
            message = "Please try again...... "

    return HttpResponse(message)


def member_login(request):

    if request.method == 'POST':
        print("start")
        email = request.POST['email']
        password = request.POST['password']

        print(email)
        print(password)

        user = Registration.objects.all().filter(email=email, password=password)
        print(user)

        if user:
            message = "/"
            return HttpResponse(message)

        elif user is not None:

            return HttpResponse()