from django.contrib import admin
from .models import Destination, Hotel, Restaurant, Review

admin.site.register(Destination)
admin.site.register(Hotel)
admin.site.register(Restaurant)
admin.site.register(Review)
