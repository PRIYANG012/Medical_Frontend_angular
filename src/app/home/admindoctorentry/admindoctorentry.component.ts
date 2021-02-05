import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { MainservicesService } from 'src/app/service/mainservices.service'
import { RxFormBuilder,FormGroupExtension,RxFormGroup ,ResetFormType} from '@rxweb/reactive-form-validators'; 
@Component({
  selector: 'app-admindoctorentry',
  templateUrl: './admindoctorentry.component.html',
  styleUrls: ['./admindoctorentry.component.css']
})
export class AdmindoctorentryComponent implements OnInit {

  DoctorRegistrationForm: RxFormGroup;
  submitted = false;


  constructor(private formBuilder: RxFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private addDoctor:MainservicesService) { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.active-tab2').css('display', 'inline-block');
      $('.as-link2').css('background-color', 'rgb(70, 146, 233)');
      $('.as-link2').css('color', 'white');
      $('.as-link2').css('border-radius', '20px');
      $('.active-tab1').css('display', 'none');
      $('.as-link1').css('background-color', 'white');
      $('.as-link3').css('background-color', 'white');

      $('.as-link1').css('color', 'black');
      $('.as-link1').css('border-radius', '20px');
      $('.active-tab3').css('display', 'none');

      $('.as-link3').css('color', 'black');
      $('.as-link3').css('border-radius', '20px');

    });

    this.DoctorRegistrationForm = <RxFormGroup>this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Age: ['', [Validators.required]],
      Gender: ['Male', [Validators.required]],
      Specialization: ['', [Validators.required]],
    });
  }

  get f() { return this.DoctorRegistrationForm.controls; }

  onSubmit() {

    this.submitted = true;


    if (this.DoctorRegistrationForm.valid) {
      console.log(this.DoctorRegistrationForm);

      this.addDoctor.AddDoctor(
        this.DoctorRegistrationForm.value.FirstName,
        this.DoctorRegistrationForm.value.LastName,
        this.DoctorRegistrationForm.value.email,
        this.DoctorRegistrationForm.value.password,
        String(this.DoctorRegistrationForm.value.Age),
        this.DoctorRegistrationForm.value.Gender,
        this.DoctorRegistrationForm.value.Specialization
        
        ).subscribe(data =>{
         alert(data["msg"]);
         this.reset()
        
         
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
    else {
      return this.DoctorRegistrationForm.invalid;
    }

  }

  reset(){
    this.DoctorRegistrationForm.resetForm({resetType:ResetFormType.ControlsOnly}); 
    Object.keys(this.DoctorRegistrationForm.controls).forEach(key => {
      this.DoctorRegistrationForm.controls[key].setErrors(null)
    });
  }
}
