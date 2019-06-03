from django.shortcuts import render, get_object_or_404
from django.contrib import messages
from django.conf import settings
from django.urls import reverse
from decimal import Decimal
from paypal.standard.forms import PayPalPaymentsForm
from django.views.decorators.csrf import csrf_exempt
#from .models import Product, Order, LineItem


def process_payment(request):
    #order_id = request.session.get('order_id')
    #order = get_object_or_404(id=order_id)
    host = request.get_host()

    paypal_dict = {
        'business': settings.PAYPAL_RECEIVER_EMAIL,
        'amount': '5.00',
        'item_name': 'Python course',
        'invoice': 'unique-invoice 00001',
        'currency_code': 'USD',
        'notify_url': 'http://{}{}'.format(host,
                                           reverse('paypal-ipn')),
        'return_url': 'http://{}{}'.format(host,
                                           reverse('payment_done')),
        'cancel_return': 'http://{}{}'.format(host,
                                              reverse('payment_canceled')),
    }

    form = PayPalPaymentsForm(initial=paypal_dict)
    return render(request, 'process_payment.html',  {'form': form})


@csrf_exempt
def payment_done(request):
    return render(request, 'payment_done.html')


@csrf_exempt
def payment_canceled(request):
    return render(request, 'payment_canceled.html')
