import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
 
  @Input()
  counterInChild = 2000



  ngOnInit(): void {
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
