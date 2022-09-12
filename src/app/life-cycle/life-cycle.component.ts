import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, DoCheck, Input, OnChanges,
   OnDestroy,
   OnInit, SimpleChanges, ViewChild , } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
})
export class LifeCycleComponent implements OnChanges, OnInit , DoCheck, 
AfterContentInit, AfterContentChecked , AfterViewInit, AfterViewChecked, OnDestroy{

  constructor() { }
  
  @Input()
  PropertyInLifeCycle = '';
  
  @Input()
  PropertyInLifeCycle_1 = '';

   public test = 'Hello Class';

   @ContentChild('contentItem') 
   contentItem :any


     @ViewChild('viewItem', {static:false})
     viewItem :any



    public data ={};
    
  ngOnChanges(changes: SimpleChanges): void{
    let x = this.contentItem;
    let y = this.viewItem;
    debugger;
  }

  ngOnInit(): void{
    // call to api  to fetch data
    let x = this.contentItem;
    let y = this.viewItem;
    this.getDataFrombackend();
    debugger
  }

  ngDoCheck(): void {
    let x = this.contentItem;  
    let y = this.viewItem;
    debugger
  }

  ngAfterContentInit(): void {
    let x = this.contentItem;  
    let y = this.viewItem;
    debugger
  }

  ngAfterContentChecked(): void {
    let y = this.viewItem;
    debugger
  }

  ngAfterViewInit(): void {
    let y = this.viewItem;
    debugger
  }
ngAfterViewChecked(): void {
  debugger
} 

ngOnDestroy(): void {
  debugger
}


    getDataFrombackend(){
      /// call t
     

      

      this.data = {'Name' : 'Mary'}
     // return x;
    }
}




  // ngOnInit(): void {
  // }
 
  // ngDoCheck(): void {
  //   debugger
  // }
   
  // ngAfterContentInit(): void {
  //   debugger
  //   let x = this.viewItem;
  //  let y = this.contentItem
  // }
  // ngAfterViewInit(): void {
  //  debugger
  //  let x = this.viewItem;
  //  let y = this.contentItem
  // }
