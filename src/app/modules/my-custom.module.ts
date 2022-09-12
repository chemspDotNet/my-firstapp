import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductComponent } from "../product/product.component";

  @NgModule({
    declarations:[ ProductComponent],  // for components imports
    imports:[ CommonModule] , // for module imports
    exports:[ ProductComponent],
    providers:[],
    bootstrap:[]
  })
  export class MyCustomModule {}