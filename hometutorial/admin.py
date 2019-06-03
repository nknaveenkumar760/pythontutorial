from django.contrib import admin
from .models import Registration,UpcomingEvents


class UpcomingEventData(admin.ModelAdmin):
    list_display = ('organizer','Date','starttime','endtime','title','address','description','image','ticketprice')
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'publish'


class RegistrationForm(admin.ModelAdmin):
    list_display = ('username','email','password','phone')


admin.site.register(UpcomingEvents, UpcomingEventData)
admin.site.register(Registration,RegistrationForm)