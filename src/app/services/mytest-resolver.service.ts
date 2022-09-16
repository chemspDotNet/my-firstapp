
  import { Injectable } from "@angular/core";
  import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
  import { Observable } from "rxjs";
import { DataService } from "./data.service";
  
  @Injectable({providedIn:'root'})
  export class MytestResolverService implements Resolve<any> {
      
    constructor(private service: DataService) { }
  
      resolve(  ) {
          return this.service.getQuotes();
      }
  }