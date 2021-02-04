import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import {AuthgaurdserviceService} from 'src/app/authgaurdservice.service'
import * as $ from 'jquery' 

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private auth: AuthgaurdserviceService,
    private router: Router) { }

  ngOnInit(): void {
  
  }


  onlogout(){
   
    this.auth.logout(); 
    this.router.navigate(['../login'],{relativeTo :this.route})

  
}

onPatient(){
   
  
  this.router.navigate(['./patient'],{relativeTo :this.route})


}


onDoctor(){
   
  this.router.navigate(['./doctor'],{relativeTo :this.route})

}

onLab(){
  this.router.navigate(['./laboratory'],{relativeTo :this.route})

}

onHome(){
  this.router.navigate(['./patient'],{relativeTo :this.route})

}


}

