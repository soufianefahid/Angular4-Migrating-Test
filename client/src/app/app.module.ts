// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { FormsModule , ReactiveFormsModule , FormBuilder }   from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

// //Imports of the Components to be loaded
// import { AppComponent } from './app.component';
// import { ProductAddComponent } from './product-add/product-add.component';
// import { ProductListComponent } from './product-list/product-list.component';
// import { OrderAddComponent } from './order-add/order-add.component';
// import { CustomerAddComponent } from './customer-add/customer-add.component';
// import { OrderListComponent } from './order-list/order-list.component';
// import { CustomerListComponent } from './customer-list/customer-list.component';
// import { RedisComponent } from './redis/redis.component';
// // Import of the services
// import { ApiService } from './services/api.service';
// import { RedisArticlesComponent } from './redis-articles/redis-articles.component';
// import { TrainingFormsComponent } from './training-forms/training-forms.component';
// import { ValidationFormComponent } from './validation-form/validation-form.component';
// import { ModernFormComponent } from './modern-form/modern-form.component';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';



// @NgModule({
//   declarations: [
//     AppComponent,
//     ProductAddComponent,
//     ProductListComponent,
//     OrderAddComponent,
//     CustomerAddComponent,
//     OrderListComponent,
//     CustomerListComponent,
//     RedisComponent,
//     RedisArticlesComponent,
//     TrainingFormsComponent,
//     ValidationFormComponent,
//     ModernFormComponent,
//     HomeComponent,
//     LoginComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     ReactiveFormsModule,
//     HttpClientModule, //For Http Service
//     // My Application Routes
//     RouterModule.forRoot([
//       {
//         path: 'products',
//         component: ProductListComponent
//       },
//       {
//         path: 'templateDrivenForms',
//         component: ValidationFormComponent
//       },
//       {
//         path: 'ModelDrivenForms',
//         component: ModernFormComponent
//       },
//       {
//         path: 'forms',
//         component: TrainingFormsComponent
//       },
//       {
//         path: 'orders',
//         component: OrderListComponent
//       },
//       {
//         path: 'redis',
//         component: RedisComponent
//       },
//       {
//         path: 'customers',
//         component: CustomerListComponent
//       },
//       {
//         path: 'products/add',
//         component: ProductAddComponent
//       },
//       {
//         path: 'products/add/:id',
//         component: ProductAddComponent
//       },          
//       {
//         path: 'orders/add',
//         component: OrderAddComponent
//       },
//       {
//         path: 'orders/add/:id',
//         component: OrderAddComponent
//       },          
//       {
//         path: 'customers/add',
//         component: CustomerAddComponent
//       },
//       {
//         path: 'customers/add/:id',
//         component: CustomerAddComponent
//       },          
//     ]),
//   ],
//   providers: [ApiService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
 
// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
 
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
 
import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
 
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
 
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})
 
export class AppModule { }