from django.db import models

class Destination(models.Model):
    name = models.CharField(max_length=100)
    image = models.URLField(help_text="Public image URL")
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Hotel(models.Model):
    name = models.CharField(max_length=120)
    location = models.CharField(max_length=120)
    rating = models.FloatField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.URLField()
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.name

class Restaurant(models.Model):
    name = models.CharField(max_length=120)
    location = models.CharField(max_length=120)
    cuisine = models.CharField(max_length=120)
    rating = models.FloatField()
    image = models.URLField()
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.name

class Review(models.Model):
    user = models.CharField(max_length=120)
    text = models.TextField()
    rating = models.IntegerField()
    created_at = models.DateField(auto_now_add=True)
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, null=True, blank=True)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f"{self.user} ({self.rating})"
