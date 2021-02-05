import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import {AuthgaurdserviceService} from 'src/app/authgaurdservice.service'
import * as $ from 'jquery' 
@Component({
  selector: 'app-navlaboratory',
  templateUrl: './navlaboratory.component.html',
  styleUrls: ['./navlaboratory.component.css']
})
export class NavlaboratoryComponent implements OnInit {

  FirstName;
  LastName;

  constructor(private route: ActivatedRoute,
    private auth: AuthgaurdserviceService,
    private router: Router) { }

  ngOnInit(): void {

    this.FirstName=localStorage.getItem('currentUserFirstName')
    this.LastName=localStorage.getItem('currentUserLastName')

  }

  onlogout(){
   
    this.auth.logout(); 
    localStorage.setItem('Laboratory_Is_True_or_False', "false")
    localStorage.setItem('Patient_Is_True_or_False', "false")

    this.router.navigate(['../login'],{relativeTo :this.route})

  
}


onPatient(){
   
  
  this.router.navigate(['./patient'],{relativeTo :this.route})


}


onDoctor(){
   
  this.router.navigate(['./doctor'],{relativeTo :this.route})

}

onHistory(){
  this.router.navigate(['./history'],{relativeTo :this.route})

}

onHome(){
  this.router.navigate(['./patient'],{relativeTo :this.route})

}


}
