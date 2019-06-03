from django.shortcuts import render, HttpResponse
from.models import Contact


def contact(request):

    if request.method == 'POST':

        print("email id not available...")
        contact_detail = Contact(request.POST['uniqueid'],
                                            request.POST['first_name'],
                                            request.POST['last_name'],
                                            request.POST['email_address'],
                                            request.POST['subject'],
                                            request.POST['description'])
        print("svae")
        contact_detail.save()
        print("saved data")
        message = "Registration Successfully"
    else:
        message = "Please try again...... "

    return HttpResponse(message)
