import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, filter, interval, map, Observable, of, pipe } from 'rxjs';
import { AccountService } from './services/account.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  
  home='home'
    date= new Date();

   constructor( private router:Router){  }

  ngOnInit(): void {

  }
  
  navigate(){
    //login first
    debugger
    if(1==1){
      // to parent
      this.router.navigateByUrl('parent')
    } else {
      // stay on same page
    }
  }
}



















// x => {
//   throw new Error("Something went wrong")
//   return of([])
// }


// const nums = of(1, 2, 3, 4, 5, 'A', 6).pipe(
//   filter((n: any) => n % 2 !== 0),
//   map(n => {
//     let result = n * n
//     if (Number.isNaN(result)) {
//       throw Error("asdasdad")
//     }
//     return result
//   }),
//   catchError(x=> this.handleError(x)),
// )

// nums.subscribe({
//   next: (next) => {
//     debugger
//   }
// })


// handleError(x: any){
//   console.log(x, 'handled')
//   throw new Error('New Error')
//   return of([]);
// }
