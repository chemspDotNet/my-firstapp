import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
  pure:false
})
export class MyPipePipe implements PipeTransform {

  transform(value:string): unknown {
    debugger
    this.calcuate()
    return  value.toUpperCase();
  }



  calcuate(){
    ///
  }
}
