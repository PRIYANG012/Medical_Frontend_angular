import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'
import {AuthgaurdserviceService} from './authgaurdservice.service'
@Injectable({
  providedIn: 'root'
})
export class LOGINAUTHGuard implements CanActivate {
  constructor(private Authguardservice: AuthgaurdserviceService, 
    private route: ActivatedRoute,
    private router: Router) {}  

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       if(localStorage.getItem('isUserOfthisProjectLoggedIn') == "true"){
        if(localStorage.getItem('Laboratory_Is_True_or_False')=="true")
    {
      this.router.navigate(['/Laboratory']); 

    }
    else if(localStorage.getItem('Patient_Is_True_or_False')=="true"){
      this.router.navigate(['/Patient']); 

    }
    else if(localStorage.getItem('Doctor_Is_True_or_False')=="true"){
      this.router.navigate(['/Doctor']); 

    }
    else if(localStorage.getItem('Admin_Is_True_or_False')=="true"){
      this.router.navigate(['/Admin']); 

    }
       
        return false;
      }
     
    return true;
  }
  
}
