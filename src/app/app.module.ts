import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {  MyMaterialModule } from './modules/my-material.module';
import { TestDirective } from './directives/test.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { MyTestDirective } from './directives/my-test.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { DataService } from './services/data.service';
import { HttpClientModule} from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { MyPipePipe } from './my-pipe.pipe'
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductMenu1Component } from './product/product-menu1/product-menu1.component';
import { ProductMenu2Component } from './product/product-menu2/product-menu2.component';
import { ProductMenu3Component } from './product/product-menu3/product-menu3.component';
import { MyreactiveComponent } from './myreactive/myreactive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestDirective,
    HighlightDirective,
    MyTestDirective,
    ParentComponent,
    ChildComponent,
    LifeCycleComponent,
    TestComponent,
    MyPipePipe, 
    ProductComponent, 
    ProductMenu1Component,
    ProductMenu2Component,
    ProductMenu3Component,
    MyreactiveComponent
    
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MyMaterialModule

  ],
 
  providers: [ ],  // make sure to create instance of serive


  bootstrap: [AppComponent]
})
export class AppModule { }
