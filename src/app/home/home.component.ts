import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import {AuthgaurdserviceService} from 'src/app/authgaurdservice.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLaboratory;
  isPatient;
  isAdmin;
  isDoctor;

  constructor( private route: ActivatedRoute,
    private auth: AuthgaurdserviceService,
    private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('Laboratory_Is_True_or_False')=="true")
    {
      this.isLaboratory=true;
      this.isPatient=false;
      this.isDoctor=false;
      this.isAdmin=false;

    }
    else if(localStorage.getItem('Patient_Is_True_or_False')=="true"){
      this.isLaboratory=false;
      this.isPatient=true;
      this.isDoctor=false;

      this.isAdmin=false;

    }
    else if(localStorage.getItem('Doctor_Is_True_or_False')=="true"){
      this.isLaboratory=false;
      this.isPatient=false;
      this.isDoctor=true;
      this.isAdmin=false;


    }
    else if(localStorage.getItem('Admin_Is_True_or_False')=="true"){
      this.isLaboratory=false;
      this.isPatient=false;
      this.isDoctor=false;
      this.isAdmin=true;


    }
  }
  
  onlogout(){
   
    this.auth.logout(); 
    this.router.navigate(['../login'],{relativeTo :this.route})

    
}


}
