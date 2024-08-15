from django.urls import path
from .views import TopProductsView

urlpatterns = [
    path('companies/<str:companyname>/categories/<str:categoryname>/products/', TopProductsView.as_view(), name='top-products'),
]
