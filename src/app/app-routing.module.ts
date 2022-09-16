import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChildComponent } from "./child/child.component";
import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { ParentComponent } from "./parent/parent.component";
import { environment } from '../environments/environment'
import { ProductComponent } from "./product/product.component";
import { ProductMenu1Component } from "./product/product-menu1/product-menu1.component";
import { ProductMenu3Component } from "./product/product-menu3/product-menu3.component";
import { ProductMenu2Component } from "./product/product-menu2/product-menu2.component";

import { TestComponent } from "./test/test.component";
import { AuthGuardGuard } from "./services/auth-guard.guard";
import { MyreactiveComponent } from "./myreactive/myreactive.component";
import { LoadGuard } from "./services/load.guard";



const appRoutes: Routes = [
    {path:'test', component:TestComponent},
    { path: 'home', component: HomeComponent,  canActivate:[AuthGuardGuard ] },
    
    { path: 'reactive', component: MyreactiveComponent,  canActivate:[AuthGuardGuard ] },
    { path: 'parent', component: ParentComponent, canActivate:[AuthGuardGuard] },
    { path: 'child/:id/:name/:city', component: ChildComponent, data: [{ 'env': environment }] , canActivate:[AuthGuardGuard]},
    {
        path: 'product', component: ProductComponent,
        children: [
            { path: 'product-menu1', component: ProductMenu1Component },

            { path: 'product-menu2', component: ProductMenu2Component },


        ]
    },
    { path: 'orders', loadChildren:  () => import('./orders/app-orders.module').then(m => m.AppOrdersModule), canLoad:[LoadGuard]},
    { path: 'product-menu3', component: ProductMenu3Component, outlet:'sidebar' },
    { path: '', redirectTo: '/test', pathMatch: "full" },
    { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) , canLoad:[LoadGuard]},
     { path: '**', component: NotfoundComponent },
]

@NgModule({

    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],


})
export class AppRoutingModule { }