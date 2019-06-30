from django.http import JsonResponse
from django.template import loader
import json
from Bot import ChatBot as bot
from time import gmtime, strftime


def index(request):
    if request.method == 'POST':
        print('post method')
        jsonData = json.loads(request.body.decode('utf-8'))
        msg = jsonData["msg"]
        res = bot.ChatBot.getBot().response(msg)
        time = strftime("%Y-%m-%d %H:%M:%S", gmtime())
        print("api called.....")
        return JsonResponse({
            "desc": "Success",
            "ques": msg,
            "res": res,
            "time": time
        })
    else:
        print("api not called")
        
        return JsonResponse({"desc": "Bad request"}, status=400)
    