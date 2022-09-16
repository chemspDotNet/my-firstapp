import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  canActivate()
  {
    // user is login then return true or false
    let token = localStorage.getItem('token1');
    debugger
    if(token){

      return true;
    } 
    else
     {
      return false;
    }
  }
  
}
