import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

    counterInParent = 0

    @ViewChild( ChildComponent, {static:true})
    myChildComponent : any ;

  ngOnInit(): void {
 debugger
    this.counterInParent = this.myChildComponent.counterInChild;


  }


  increment(){
    this.counterInParent++;
  }

  
  decrement(){
    this.counterInParent++;
  }


  eventHandler(item:any){
    this.counterInParent = item;
  }
}
