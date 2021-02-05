import { Component, OnInit } from '@angular/core';
import { AuthgaurdserviceService } from 'src/app/authgaurdservice.service'
import { MainservicesService } from 'src/app/service/mainservices.service'
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
    private auth: AuthgaurdserviceService,
    private login:MainservicesService
  ) { }

  ngOnInit(): void {

    this.initemail = localStorage.getItem('RememberEmail');
    this.FORMLOGIN = this.formBuilder.group({

      email: [this.initemail, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      UserType:['Doctor',[Validators.required]],
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


      if (this.FORMLOGIN.value.UserType == "Lab") {
       
        localStorage.setItem('Laboratory_Is_True_or_False', "true")
        localStorage.setItem('Admin_Is_True_or_False', "false")

        localStorage.setItem('Patient_Is_True_or_False', "false")
        localStorage.setItem('Doctor_Is_True_or_False', "false")
        
        
      this.login.LabLogin(
       
        this.FORMLOGIN.value.email,
        this.FORMLOGIN.value.password,
      
        
        ).subscribe(data =>{
         alert(data["msg"]);

        localStorage.setItem('currentUserId', data["user_id"])
        localStorage.setItem('currentUserFirstName', data["user_first_name"])
        localStorage.setItem('currentUserLastName', data["user_last_name"])
        localStorage.setItem('currentUserEmail', this.FORMLOGIN.value.email )


         
         this.router.navigate(['../Laboratory'], { relativeTo: this.route })
        
         
     },
     err => {
       console.log(err['status'])
       if(err['status'] == '400'){
       }
       else if(err['status'] == '500'){
       }
     }
     
     )


      }
      else if(this.FORMLOGIN.value.UserType == "Patient") {
        
        localStorage.setItem('Patient_Is_True_or_False', "true")
        localStorage.setItem('Laboratory_Is_True_or_False', "false")
        localStorage.setItem('Doctor_Is_True_or_False', "false")

        localStorage.setItem('Admin_Is_True_or_False', "false")


        this.login.PatientLogin(
       
          this.FORMLOGIN.value.email,
          this.FORMLOGIN.value.password,
        
          
          ).subscribe(data =>{
           alert(data["msg"]);

           localStorage.setItem('currentUserId', data["user_id"])
           localStorage.setItem('currentUserFirstName', data["user_first_name"])
           localStorage.setItem('currentUserLastName', data["user_last_name"])
           localStorage.setItem('currentUserEmail', this.FORMLOGIN.value.email )
           
           this.router.navigate(['../Patient'], { relativeTo: this.route })

          
           
       },
       err => {
         console.log(err['status'])
         if(err['status'] == '400'){
         }
         else if(err['status'] == '500'){
         }
       }
       
       )



      }
      else if(this.FORMLOGIN.value.UserType == "Doctor") {
        localStorage.setItem('Doctor_Is_True_or_False', "true")
    
        localStorage.setItem('Patient_Is_True_or_False', "false")
        localStorage.setItem('Laboratory_Is_True_or_False', "false")
        localStorage.setItem('Admin_Is_True_or_False', "false")


        this.login.DoctorLogin(
       
          this.FORMLOGIN.value.email,
          this.FORMLOGIN.value.password,
        
          
          ).subscribe(data =>{
           alert(data["msg"]);

           localStorage.setItem('currentUserId', data["user_id"])
           localStorage.setItem('currentUserFirstName', data["user_first_name"])
           localStorage.setItem('currentUserLastName', data["user_last_name"])
           localStorage.setItem('currentUserEmail', this.FORMLOGIN.value.email )
           
           this.router.navigate(['../Doctor'], { relativeTo: this.route })


          
           
       },
       err => {
         console.log(err['status'])
         if(err['status'] == '400'){
         }
         else if(err['status'] == '500'){
         }
       }
       
       )



      }
      else if(this.FORMLOGIN.value.UserType == "Admin") {
        localStorage.setItem('Doctor_Is_True_or_False', "false")
        localStorage.setItem('Admin_Is_True_or_False', "true")
    
        localStorage.setItem('Patient_Is_True_or_False', "false")
        localStorage.setItem('Laboratory_Is_True_or_False', "false")

        localStorage.setItem('currentUserId',"null")
        localStorage.setItem('currentUserFirstName', "Admin")
        localStorage.setItem('currentUserLastName', "Name")

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