from rest_framework import serializers
from .models import Destination, Hotel, Restaurant, Review

class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destination
        fields = "__all__"

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = "__all__"

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = "__all__"

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"
