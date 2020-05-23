from rest_framework import routers
from django.conf.urls import url
from . import views
from rest_framework_simplejwt import views as simplejwt_views

router = routers.DefaultRouter()

router.register('users', views.UserViewSet, basename='user')

urlpatterns = [
    url('login/', simplejwt_views.TokenObtainPairView.as_view(), name='auth-login')
]

urlpatterns += router.urls
