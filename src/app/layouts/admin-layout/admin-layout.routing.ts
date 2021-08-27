import {Component} from '@angular/core';
import {UserRegisterComponent} from '../../pages/user-register/user-register.component';
import {AdminLoginComponent} from '../../pages/admin-login/admin-login.component';
import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {CreateCategoryComponent} from '../../pages/create-category/create-category.component';
import {CreateProductComponent} from '../../pages/create-product/create-product.component';
import {ManageCategoriesComponent} from '../../pages/manage-categories/manage-categories.component';
import {ManageProductsComponent} from '../../pages/manage-products/manage-products.component';
import {ManageOrdersComponent} from '../../pages/manage-orders/manage-orders.component';
import {RegistrationDEOComponent} from 'src/app/pages/registration-deo/registration-deo.component';
import {CustomerReviewReportComponent} from 'src/app/pages/customer-review-report/customer-review-report.component';
import {TestimonialComponent} from 'src/app/pages/testimonial/testimonial.component';
import {PromotionsComponent} from 'src/app/pages/promotions/promotions.component';
import {AuthGuard} from '../../auth-guard/auth-guard';
import {Top10ProductsComponent} from '../../pages/top-10-products/top-10-products.component';
import {Top10OrdersComponent} from '../../pages/top-10-orders/top-10-orders.component';
import {AuthGuard} from '../../guards/auth.guard';


export const AdminLayoutRoutes: Routes = [
    {path: 'manage-category', canActivate: [AuthGuard], component: ManageCategoriesComponent},
    {path: 'manage-orders', canActivate: [AuthGuard], component: ManageOrdersComponent},
    {path: 'manage-products', canActivate: [AuthGuard], component: ManageProductsComponent},
    {path: 'category', canActivate: [AuthGuard], component: CreateCategoryComponent},
    {path: 'products', canActivate: [AuthGuard], component: CreateProductComponent},
    {path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent},
    {path: 'user-profile', canActivate: [AuthGuard], component: UserProfileComponent},
    {path: 'tables',  canActivate: [AuthGuard],component: TablesComponent},
    {path: 'icons', canActivate: [AuthGuard], component: IconsComponent},
    {path: 'maps', canActivate: [AuthGuard], component: MapsComponent},
    {path: 'registration_DEO', canActivate: [AuthGuard], component: RegistrationDEOComponent},
    {path: 'reviews', canActivate: [AuthGuard], component: CustomerReviewReportComponent},
    {path: 'testimonial', canActivate: [AuthGuard], component: TestimonialComponent},
    {path: 'promotions', canActivate: [AuthGuard], component: PromotionsComponent},
    {path: 'top-products', canActivate: [AuthGuard], component: Top10ProductsComponent},
    {path: 'top-orders', canActivate: [AuthGuard], component: Top10OrdersComponent},
];
