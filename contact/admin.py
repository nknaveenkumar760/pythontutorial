from django.contrib import admin
from .models import Contact
# Register your models here.
from .models import Contact


class ContactAdmin(admin.ModelAdmin):
	list_display = ('first_name', 'last_name', 'email_address', 'subject', 'description')

admin.site.register(Contact, ContactAdmin)
