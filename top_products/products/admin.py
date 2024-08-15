from django.contrib import admin
from .models import Product, Category

# Register the Category model
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

# Register the Product model
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'rating', 'company', 'discount', 'availability', 'category')
    list_filter = ('company', 'availability', 'category')
    search_fields = ('name', 'company')
