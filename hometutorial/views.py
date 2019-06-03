from django.shortcuts import render, HttpResponse, render_to_response,get_object_or_404,Http404
from .models import Registration, UpcomingEvents
from blog.models import Post
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth import logout

def home(request):

    event = UpcomingEvents.objects.all().order_by('-id')[:3]
    posts = Post.objects.all().order_by('-id')[:3]

    return render(request, 'index.html', {'event': event, 'posts': posts})


def event_detail(request, data):
    try:
        print("hello event")
        events = get_object_or_404(UpcomingEvents, slug=data)
        print(events)
        return render(request, 'event_details.html', {'events': events})
    
    except ValueError:
        raise Http404()


def teachers(request):

    return render(request, 'teachers.html')


def courses(request):

    return render(request, 'courses.html')


def event(request):
    event = UpcomingEvents.objects.all().order_by('-id')[:3]

    return render(request, 'event.html',{'events':event})


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


# def member_login(request):
#
#     if request.method == 'POST':
#         print("start")
#         email = request.POST['email']
#         password = request.POST['password']
#
#         print(email)
#         print(password)
#
#         user = Registration.objects.all().filter(email=email, password=password)
#         print(user.all())
#         print(user)
#
#         if user:
#             message = "/"
#             return HttpResponse(message)
#
#         elif user is not None:
#
#             return HttpResponse()


def auth_and_login(request):

    email = request.POST.get('email')
    password = request.POST.get('password')

    if request.method == 'POST':

        user = Registration.objects.all().filter(email=email, password=password)
        all_data = user.all()
        for i in all_data:
            username = i.username
            print(username)

        remember = request.POST.get('remember_me')
        if not remember:
            remember = False
            request.session.set_expiry(0)
            print("not clicked remember me")
        else:
            request.session.set_expiry(1209600) # two week
            print("clicked remember me")
        if user:

            request.session['username'] = username
            key = request.session.session_key
            print(key)
            request.session.save()
            request.session.modified = True
            print('username' in request.session)
            session_key = key
            print(session_key)
            #Registration.objects.filter(email=email).update(session_key=session_key)
            #context = RequestContext(request)
            response = render(request, 'index.html')
            response.set_cookie("username", username)
            print(request.session['username'])

        else:
            message = "Invalid Email and Password"
            return render(request, 'login.html', {'message': message})

    return response


def logouts(request):

    response = render_to_response('index.html')

    if 'action' in request.GET:
        action = request.GET.get('action')
        if action == 'logout':
            if request.session.has_key('username'):
                request.session.flush()
                print("session id deleted")
        response.delete_cookie('username')
        print("Cookies is deleted")
        logout(request)
    return response


def forget_password(request):

    email = request.POST.get('email')
    print(email)
    if request.method == 'POST':

        dataexits = Registration.objects.all().filter(email=email)
        print(dataexits)

        if dataexits:

            subject = "Thank you for Joining Our Newsletter"
            from_email = settings.EMAIL_HOST_USER
            to_email = [email]
            signup_message =  f"""  Hi {email}!
                         Thanks for applying for a knowledgetutorial account.

                          You requested to reset the password for your knowledgetutorialhub.com account with the e-mail address ({email})
                          Your temporary password is .techinal issue. pleas try again later.
                    """ 
                    

            send_mail(subject=subject, from_email=from_email, recipient_list=to_email, message=signup_message,
                      fail_silently=False)

            message = "Check your mail we have sent you a mail regarding forget password"

        else:
            message = "your Email id is not Registered Please sign up  "

    return HttpResponse(message)


