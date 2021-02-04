import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthgaurdserviceService {

  constructor() { }
  logout() :void {    
    localStorage.setItem('isUserOfthisProjectLoggedIn','false'); 
    localStorage.setItem('Laboratory_Is_True_or_False', 'false')
    localStorage.setItem('Patient_Is_True_or_False', 'false')
    }   
 
}
