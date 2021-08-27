import {JwPaginationModule} from 'jw-angular-pagination';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NotifierModule } from 'angular-notifier';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {ManageProductsComponent} from './pages/manage-products/manage-products.component';
import {ManageCategoriesComponent} from './pages/manage-categories/manage-categories.component';
import {ManageOrdersComponent} from './pages/manage-orders/manage-orders.component';
import {CreateProductComponent} from './pages/create-product/create-product.component';
import {CreateCategoryComponent} from './pages/create-category/create-category.component';
import {AdminLoginComponent} from './pages/admin-login/admin-login.component';
import {UserRegisterComponent} from './pages/user-register/user-register.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {CustomerReviewReportComponent} from './pages/customer-review-report/customer-review-report.component';
import {RegistrationDEOComponent} from './pages/registration-deo/registration-deo.component';
import {TestimonialComponent} from './pages/testimonial/testimonial.component';
import {PromotionsComponent} from './pages/promotions/promotions.component';
import {Top10ProductsComponent} from './pages/top-10-products/top-10-products.component';
import {NgProgressHttpModule} from 'ngx-progressbar/http';
import {NgProgressModule} from 'ngx-progressbar';
import {Top10OrdersComponent} from './pages/top-10-orders/top-10-orders.component';
import {AlertModule} from "./pages/_alert";


@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ComponentsModule,
        NgbModule,
        RouterModule,
        AppRoutingModule,
        JwPaginationModule,
        NgxPaginationModule,
        AlertModule,
        NotifierModule,
        NgProgressModule.withConfig({
            color: "black"
        }),
        NgProgressHttpModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
        ManageProductsComponent,
        ManageCategoriesComponent,
        ManageOrdersComponent,
        CreateProductComponent,
        CreateCategoryComponent,
        AdminLoginComponent,
        UserRegisterComponent,
        CustomerReviewReportComponent,
        RegistrationDEOComponent,
        TestimonialComponent,
        PromotionsComponent,
        Top10ProductsComponent,
        Top10OrdersComponent

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
