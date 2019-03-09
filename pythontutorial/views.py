from django.shortcuts import render, HttpResponse
from .models import Post, HtmlPost, Video
from django.http import JsonResponse
# Create your views here.


def pythonlang(request):

    data = Post.objects.filter(id=1)

    return render(request, 'python.html', {'data': data})


def python_tutorial(request, page):

    overview_data = Post.objects.filter(id=page)

    values_list = list(overview_data.values())

    return JsonResponse(values_list, safe=False)


def htmllang(request):

    data = HtmlPost.objects.filter(id=1)

    return render(request, 'html.html', {'data': data})


def html_tutorial(request, page):

    overview_data = HtmlPost.objects.filter(id=page)

    values_list = list(overview_data.values())

    return JsonResponse(values_list, safe=False)


def showvideos(request):
    allvideo = Video.objects.all()

    context = {'allvideo': allvideo
               }

    return render(request, 'online_course_video.html', context)
