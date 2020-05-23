from rest_framework import routers
from django.conf.urls import url
from . import views

router = routers.DefaultRouter()

router.register('users', views.UserViewSet, basename='user')

urlpatterns = [
    url('login/', views.login_view, name='auth-login'),
    url('logout/', views.logout_view, name='auth-logout  '),
    url('register/', views.UserRegisterView.as_view(), name='auth-register')
]

urlpatterns += router.urls
