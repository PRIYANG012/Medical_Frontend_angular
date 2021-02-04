import { Component, OnInit } from '@angular/core';
import { AuthgaurdserviceService } from 'src/app/authgaurdservice.service'

import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // initialize Email
  initemail: string;
  FORMLOGIN: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthgaurdserviceService
  ) { }

  ngOnInit(): void {

    this.initemail = localStorage.getItem('RememberEmail');
    this.FORMLOGIN = this.formBuilder.group({

      email: [this.initemail, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [this.initemail ? true : false]
    });
    this.auth.logout();
  }

  get f() { return this.FORMLOGIN.controls; }

  onSubmit() {

    this.submitted = true;


    if (this.FORMLOGIN.valid) {
      console.log(this.FORMLOGIN);
      if (this.FORMLOGIN.value.remember == true || this.FORMLOGIN.value.remember == "True") {
        localStorage.setItem('RememberEmail', this.FORMLOGIN.value.email);
      }
      else {
        localStorage.setItem('RememberEmail', null);
        localStorage.removeItem('RememberEmail');
      }
      localStorage.setItem('isUserOfthisProjectLoggedIn', "true");
      if (this.FORMLOGIN.value.email == "laboratory@hospital.com") {
       
        localStorage.setItem('Laboratory_Is_True_or_False', "true")
        localStorage.setItem('Admin_Is_True_or_False', "false")

        localStorage.setItem('Patient_Is_True_or_False', "false")
        localStorage.setItem('Doctor_Is_True_or_False', "false")


        this.router.navigate(['../Laboratory'], { relativeTo: this.route })
      }
      else if(this.FORMLOGIN.value.email == "patient@hospital.com") {
        
        localStorage.setItem('Patient_Is_True_or_False', "true")
        localStorage.setItem('Laboratory_Is_True_or_False', "false")
        localStorage.setItem('Doctor_Is_True_or_False', "false")

        localStorage.setItem('Admin_Is_True_or_False', "false")

        this.router.navigate(['../Patient'], { relativeTo: this.route })

      }
      else if(this.FORMLOGIN.value.email == "doctor@hospital.com") {
        localStorage.setItem('Doctor_Is_True_or_False', "true")
    
        localStorage.setItem('Patient_Is_True_or_False', "false")
        localStorage.setItem('Laboratory_Is_True_or_False', "false")
        localStorage.setItem('Admin_Is_True_or_False', "false")


        this.router.navigate(['../Doctor'], { relativeTo: this.route })

      }
      else if(this.FORMLOGIN.value.email == "admin@hospital.com") {
        localStorage.setItem('Doctor_Is_True_or_False', "false")
        localStorage.setItem('Admin_Is_True_or_False', "true")
    
        localStorage.setItem('Patient_Is_True_or_False', "false")
        localStorage.setItem('Laboratory_Is_True_or_False', "false")

        this.router.navigate(['../Admin'], { relativeTo: this.route })

      }

     

    }
    else {
      return this.FORMLOGIN.invalid;
    }

  }

  onForgot() {


    this.router.navigate(['../forgotpassword'], { relativeTo: this.route })

  }

}