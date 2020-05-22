from rest_framework import routers
from django.conf.urls import url
from . import views

router = routers.DefaultRouter()

router.register('users', views.UserViewSet, basename='user')

urlpatterns = router.urls
