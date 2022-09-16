import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AccountService } from "../services/account.service";


@Component({
    selector: 'app-home',  // tag to reference
    templateUrl: './home.component.html',  
    styleUrls:['./home.component.css' ],
    encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent  implements OnInit{

     title = "Hello Class. Welcome !!!"
    home='home'
     flag = true;
   
     username= 'DotNetUser'
     password = 'admin'

     expression = 1;

     myTest='myTest1';   

     mystyle: any ={};

     customers =[
      {'name': 'Paul1', 'age': '23'},
      {'name': 'Paul2', 'age': 26},
      {'name': 'Paul3', 'age': 23},
      {'name': 'Paul4','age': 20},
      {'name': 'Paul5', 'age': 24},
         ]

         quotes;

         constructor(private activatedroute:ActivatedRoute){ }

         ngOnInit(): void {
            debugger
            this.quotes = this.activatedroute.snapshot.data['quotes'];
         }
     getTitle(){
        let item = {'customerName': 'Paul'}
        //debugger
      return item
     }


     toggleButton(){
        this.flag = !this.flag;
     }


     test(item:any){
        debugger
     }


     handleEvent( ){
     // debugger
      this.flag = !this.flag
     }

     incrementTestClass(){
      this.mystyle = {color:'red', 'border': '1px solid blue'};
   }

   sumbitForm(frmvalue: any){
      debugger
      let user = this.username;
      let psswr = this.password;
      // call api here
   }
}

// Interpolation
   // ts file ---> html

// Property Binding
  /// ts file === > html

// Event Binding
 // html === > ts file

 // Two way Binding

 //  html <====> ts file

