# from django.conf import settings
# from rest_framework.permissions import BasePermission
#
# # from quickorganics.modules.models import Module
# from quickorganics.organizations.models import Membership, Organization
#
#
# # class HasModuleAccess(BasePermission):
# #     def has_permission(self, request, view):
# #         module = Module.objects.get(id=view.kwargs['organization_id'])
# #         try:
# #             membership = Membership.objects.get(user=request.user, organization=module.organization)
# #             return module.name in membership.modules
# #         except Membership.DoesNotExist:
# #             return False
#
#
# class IsAdmin(BasePermission):
#     def has_permission(self, request, view):
#         organization = Organization.objects.get(id=view.kwargs['organization_id'])
#         try:
#             membership = Membership.objects.get(user=request.user, organization=organization)
#             return membership.role == settings.OWNER_ROLE or membership.role == settings.ADMIN_ROLE
#         except Membership.DoesNotExist:
#             return False
#
#
# class IsMember(BasePermission):
#     def has_permission(self, request, view):
#         organization = Organization.objects.get(id=view.kwargs['organization_id'])
#         try:
#             Membership.objects.get(user=request.user, organization=organization)
#             return True
#         except Membership.DoesNotExist:
#             return False
