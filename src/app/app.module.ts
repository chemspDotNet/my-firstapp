import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyCustomModule } from './modules/my-custom.module';
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
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyCustomModule,
    FormsModule,
    HttpClientModule
  ],
 
  providers: [ ],  // make sure to create instance of serive


  bootstrap: [AppComponent]
})
export class AppModule { }
