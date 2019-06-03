from django.contrib import admin
from .models import Newsletter
# Register your models here.


class NewsletterData(admin.ModelAdmin):

    list_display = ('id','email')

admin.site.register(Newsletter,NewsletterData)
