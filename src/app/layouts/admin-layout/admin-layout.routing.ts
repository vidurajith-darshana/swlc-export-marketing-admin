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
import {Top10ProductsComponent} from '../../pages/top-10-products/top-10-products.component';
import {Top10OrdersComponent} from '../../pages/top-10-orders/top-10-orders.component';

export const AdminLayoutRoutes: Routes = [
    {path: 'manage-category', component: ManageCategoriesComponent},
    {path: 'manage-orders', component: ManageOrdersComponent},
    {path: 'manage-products', component: ManageProductsComponent},
    {path: 'category', component: CreateCategoryComponent},
    {path: 'products', component: CreateProductComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'tables', component: TablesComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'registration_DEO', component: RegistrationDEOComponent},
    {path: 'reviews', component: CustomerReviewReportComponent},
    {path: 'testimonial', component: TestimonialComponent},
    {path: 'promotions', component: PromotionsComponent},
    {path: 'top-products', component: Top10ProductsComponent},
    {path: 'top-orders', component: Top10OrdersComponent},
];
