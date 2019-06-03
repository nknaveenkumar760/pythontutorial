from django.contrib import admin
from .models import Post, HtmlPost, Video
# Register your models here.

admin.site.register(Post)
admin.site.register(HtmlPost)
admin.site.register(Video)


