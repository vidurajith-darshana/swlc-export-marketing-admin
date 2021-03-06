import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { CreateCategoryComponent } from '../../pages/create-category/create-category.component';
import { CreateProductComponent } from '../../pages/create-product/create-product.component';
import { ManageCategoriesComponent } from '../../pages/manage-categories/manage-categories.component';
import { ManageProductsComponent } from '../../pages/manage-products/manage-products.component';
import { ManageOrdersComponent } from '../../pages/manage-orders/manage-orders.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'manage-category',      component: ManageCategoriesComponent },
    { path: 'manage-orders',      component: ManageOrdersComponent },
    { path: 'manage-products',      component: ManageProductsComponent },
    { path: 'category',      component: CreateCategoryComponent },
    { path: 'products',      component: CreateProductComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
];
