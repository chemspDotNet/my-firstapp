import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatSliderModule } from '@angular/material/slider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatPaginatorModule} from '@angular/material/paginator';


  @NgModule({
    declarations:[  ],  // for components imports
    imports:
    [  CommonModule,
       MatAutocompleteModule,
       MatPaginatorModule,
       MatSliderModule
       ] , // for module imports
    exports:[       MatAutocompleteModule,
      MatPaginatorModule,
      MatSliderModule ],  /// comppoents, modules, directive, pipes
    providers:[],
    bootstrap:[]
  })
  export class MyMaterialModule {}