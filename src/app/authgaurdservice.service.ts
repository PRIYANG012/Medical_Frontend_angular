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
    localStorage.setItem('Doctor_Is_True_or_False', 'false')
    localStorage.setItem('currentUserId',null)
    localStorage.setItem('currentUserFirstName',null)
    localStorage.setItem('currentUserLastName',null)
    localStorage.setItem('currentUserEmail', null )

    }   
 
}
