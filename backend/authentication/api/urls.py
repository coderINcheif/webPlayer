from rest_framework import routers
from django.conf.urls import url
from . import views

router = routers.DefaultRouter()

router.register('', views.UserViewSet, basename='user')

urlpatterns = [
    url('authentication/login/', views.login_view, name='auth-login'),
    url('authentication/logout/', views.logout_view, name='auth-logout'),
    url(
        'authentication/register/',
        views.UserRegisterView.as_view(),
        name='auth-register'
    )
]

urlpatterns += router.urls
