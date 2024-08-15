from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from .models import Product
from .serializers import ProductSerializer

class ProductPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'top'
    max_page_size = 100

class TopProductsView(generics.ListAPIView):
    serializer_class = ProductSerializer
    pagination_class = ProductPagination

    def get_queryset(self):
        company_name = self.kwargs['companyname']
        category_name = self.kwargs['categoryname']
        min_price = self.request.query_params.get('minPrice', 0)
        max_price = self.request.query_params.get('maxPrice', float('inf'))
        print(company_name,category_name,min_price,max_price)
        products = Product.objects.filter(
            company=company_name,
            category=category_name,
            price__gte=min_price,
            price__lte=max_price
        )
        print(products)
        return products
