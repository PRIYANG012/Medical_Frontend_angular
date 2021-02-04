import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import {AuthgaurdserviceService} from 'src/app/authgaurdservice.service'
import * as $ from 'jquery' 
@Component({
  selector: 'app-navdoctor',
  templateUrl: './navdoctor.component.html',
  styleUrls: ['./navdoctor.component.css']
})
export class NavdoctorComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private auth: AuthgaurdserviceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onlogout(){
   
    this.auth.logout(); 
    
    this.router.navigate(['../login'],{relativeTo :this.route})

  
}


onCaseList(){
   
  
  this.router.navigate(['./caselist'],{relativeTo :this.route})


}


onFuture(){
   
  this.router.navigate(['./futureappointment'],{relativeTo :this.route})

}

onScheduleLab(){
  this.router.navigate(['./schedulelab'],{relativeTo :this.route})

}

onHome(){
  this.router.navigate(['./caselist'],{relativeTo :this.route})

}

onLabResults(){
  this.router.navigate(['./labsresult'],{relativeTo :this.route})

}

}
