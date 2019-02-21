from django.contrib import admin
from .models import Post, VideoUploader, Video
# Register your models here.

admin.site.register(Post)
admin.site.register(VideoUploader)
admin.site.register(Video)

