import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[DataService]
})
export class ProductComponent implements OnInit {


   customerInProduct:any;

   testData :any
  
   svc:DataService | undefined

   constructor( mytest:DataService){
     this.svc = mytest
   }

  ngOnInit(){
  // this.customerInProduct =  this.svc?.getData();
  }


  getDataTest(){
    debugger
   this.testData = this.svc?.y;
  }
}
