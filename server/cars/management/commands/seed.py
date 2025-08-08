from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from cars.models import Car,CarImage
from faker import Faker
import random

class Command(BaseCommand):
    help = 'Seed database with random car data'

    def handle(self, *args, **kwargs):
        fake = Faker()
        User = get_user_model()

        
        user, created = User.objects.get_or_create(username='hamza', defaults={'password': 'hamza12345'})
        user2, created = User.objects.get_or_create(username='hamza2', defaults={'password': 'hamza12345'})

        fuel_choices = ['gasoline', 'diesel', 'electric', 'hybrid']
        colors = ['Red', 'Blue', 'Black', 'White', 'Silver', 'Green']
        # User 1
        for _ in range(10):  
            car=Car.objects.create(
                user=user,
                title=fake.word().capitalize() + " Car",
                price=round(random.uniform(5000, 50000), 2),
                is_featured=random.choice([True, False]),
                model=fake.word().capitalize(),
                year=random.randint(2000, 2024),
                mileage=random.randint(0, 200000),
                fuel_type=random.choice(fuel_choices),
                color=random.choice(colors),
                description=fake.text(),
                features=", ".join(fake.words(5))
            )
        
            for _ in range(5):
                    CarImage.objects.create(
                        car=car,
                        image=f"car_images/{random.randint(1,10)}.jpg"
                    )

        # User 2
        for _ in range(10):  
            car=Car.objects.create(
                user=user2,
                title=fake.word().capitalize() + " Car",
                price=round(random.uniform(5000, 50000), 2),
                is_featured=random.choice([True, False]),
                model=fake.word().capitalize(),
                year=random.randint(2000, 2024),
                mileage=random.randint(0, 200000),
                fuel_type=random.choice(fuel_choices),
                color=random.choice(colors),
                description=fake.text(),
                features=", ".join(fake.words(5))
            )
        
            for _ in range(5):
                    CarImage.objects.create(
                        car=car,
                        image=f"car_images/{random.randint(1,10)}.jpg"
                    )

        self.stdout.write(self.style.SUCCESS('Successfully seeded the database!'))
