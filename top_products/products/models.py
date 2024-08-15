from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255,default="Laptop")

    def __str__(self):
        return self.name

class Product(models.Model):
    category = models.CharField(default="Laptop",max_length=30)
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.FloatField()
    company = models.CharField(max_length=255)
    discount = models.DecimalField(max_digits=5, decimal_places=2)
    availability = models.CharField(max_length=20, choices=[('yes', 'In Stock'), ('out-of-stock', 'Out of Stock')], default='yes')

    def __str__(self):
        return self.name
