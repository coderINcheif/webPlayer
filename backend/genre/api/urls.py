from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register('', GenreViewSet)

urlpatterns = []

urlpatterns += router.urls
