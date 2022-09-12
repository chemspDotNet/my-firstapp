import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  
  constructor(private dataservice: DataService, private account: AccountService) { 

  }

  quotes:any
  ngOnInit(): void {
  }


  login() {
    debugger
    this.account.Login().subscribe({
      next: (data) => {
        debugger;
        localStorage.setItem('token', data['access_token'])

      }
    });
  }

  register() {
    this.account.register().subscribe({
      next: (data) => {
        debugger;
        console.log("Registration Successful !")
      }
    });
  }

  getquotes(){
   this.dataservice.getQuotes().subscribe({
    next:(quotes)=>{
   debugger
     console.log(quotes)
    }
   })

//this.quotes = this.dataservice.getQuotes();
  }
  addquotes(){
    this.dataservice.PostQuotes().subscribe({
      next:(newquote)=>{
     debugger
       console.log(newquote)
      }
     })
  }

}
