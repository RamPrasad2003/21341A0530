from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    productName = serializers.CharField(source='name')
    availability = serializers.CharField()

    class Meta:
        model = Product
        fields = ['productName', 'price', 'rating', 'discount', 'availability']
