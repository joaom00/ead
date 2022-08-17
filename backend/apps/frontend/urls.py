from urllib.parse import urlparse
from django.urls import path

from . import views

app_name = 'frontend'

urlpatterns = [
    path('customers/', views.CustomerListAPIView.as_view(), name='customer_list'),
]
