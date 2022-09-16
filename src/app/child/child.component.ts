import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {

   myId;
   city;
   name;


   srno;
   cityParam

  constructor( private activatedRoute : ActivatedRoute) { }
 
  @Input()
  counterInChild = 2000

  mySub: Subscription;

  mySub1: Subscription;

  ngOnInit(): void {

    this.srno = this.activatedRoute.snapshot.queryParams['srNo'];
    this.cityParam = this.activatedRoute.snapshot.queryParams['city'];


    let x = this.activatedRoute.snapshot.data[0]['env'];
    debugger;

    // this.activatedRoute.queryParams.subscribe({next:(qryprms)=>{
    //      this.srno = qryprms['srNo'];
    // }})
    
    
  }
  ngOnDestroy(): void {
  //   this.mySub.unsubscribe();
  //   this.mySub1.unsubscribe();
   }

  increment(){
   this.counterInChild++;
   debugger
   
  }
decrement(){
  this.counterInChild--;
  debugger
 
}
}
