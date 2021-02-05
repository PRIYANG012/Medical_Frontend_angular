import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { MainservicesService } from 'src/app/service/mainservices.service'
import { RxFormBuilder,FormGroupExtension,RxFormGroup ,ResetFormType} from '@rxweb/reactive-form-validators'; 
@Component({
  selector: 'app-adminpatiententry',
  templateUrl: './adminpatiententry.component.html',
  styleUrls: ['./adminpatiententry.component.css']
})
export class AdminpatiententryComponent implements OnInit {

  PatientRegistrationForm: RxFormGroup;
  submitted = false;
 
  constructor(private formBuilder: RxFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private addPatient:MainservicesService
    ) { }

  ngOnInit(): void {

    $(document).ready(function() {
      $('.active-tab1').css('display', 'inline-block');
      $('.as-link1').css( 'background-color', 'rgb(70, 146, 233)');
      $('.as-link1').css( 'color', 'white');
      $('.as-link1').css( 'border-radius', '20px');
      $('.active-tab2').css('display', 'none');
      $('.as-link2').css( 'background-color', 'white');
      $('.as-link3').css( 'background-color', 'white');
     
      $('.as-link2').css( 'color', 'black');
      $('.as-link2').css( 'border-radius', '20px');
      $('.active-tab3').css('display', 'none');
      
      $('.as-link3').css( 'color', 'black');
      $('.as-link3').css( 'border-radius', '20px');
     
    });


    this.PatientRegistrationForm = <RxFormGroup>this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Age: ['', [Validators.required]],
      Gender: ['Male', [Validators.required]]
    });


  }

  get f() { return this.PatientRegistrationForm.controls; }
  

  onSubmit() {

    this.submitted = true;


    if (this.PatientRegistrationForm.valid) {
      console.log(this.PatientRegistrationForm);

      this.addPatient.AddPatient(
        this.PatientRegistrationForm.value.FirstName,
        this.PatientRegistrationForm.value.LastName,
        this.PatientRegistrationForm.value.email,
        this.PatientRegistrationForm.value.password,
        String(this.PatientRegistrationForm.value.Age),
        this.PatientRegistrationForm.value.Gender,
        
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
      return this.PatientRegistrationForm.invalid;
    }

  }

  reset(){
    this.PatientRegistrationForm.resetForm({resetType:ResetFormType.ControlsOnly}); 
    Object.keys(this.PatientRegistrationForm.controls).forEach(key => {
      this.PatientRegistrationForm.controls[key].setErrors(null)
    });
  }

}
