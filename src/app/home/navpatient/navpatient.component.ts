import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import {AuthgaurdserviceService} from 'src/app/authgaurdservice.service'
import * as $ from 'jquery' 
@Component({
  selector: 'app-navpatient',
  templateUrl: './navpatient.component.html',
  styleUrls: ['./navpatient.component.css']
})
export class NavpatientComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private auth: AuthgaurdserviceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onlogout(){
   
    this.auth.logout(); 
    
    this.router.navigate(['../login'],{relativeTo :this.route})

  
}


onPatient(){
   
  
  this.router.navigate(['./mycases'],{relativeTo :this.route})


}


onRegister(){
   
  this.router.navigate(['./newcaseregister'],{relativeTo :this.route})

}

onTest(){
  this.router.navigate(['./requesttest'],{relativeTo :this.route})

}

onHome(){
  this.router.navigate(['./mycases'],{relativeTo :this.route})

}

onlabResults(){
  this.router.navigate(['./labresult'],{relativeTo :this.route})

}
}
