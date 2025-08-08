from django.db import models
from django.conf import settings

class Car(models.Model):
    FUEL_CHOICES = [
        ('gasoline', 'Gasoline'),
        ('diesel', 'Diesel'),
        ('electric', 'Electric'),
        ('hybrid', 'Hybrid')
    ]

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    mileage = models.IntegerField(help_text="Mileage in kilometers")
    fuel_type = models.CharField(max_length=20, choices=FUEL_CHOICES)
    color = models.CharField(max_length=50)
    description = models.TextField()
    # features = models.TextField()
    features = models.JSONField(default=list, blank=True)

    def __str__(self):
        return self.title

class CarImage(models.Model):
    car = models.ForeignKey(Car, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='car_images/')

    def __str__(self):
        return f"Image for {self.car.title}"

