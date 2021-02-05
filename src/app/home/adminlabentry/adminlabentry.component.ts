import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { MainservicesService } from 'src/app/service/mainservices.service'
import { RxFormBuilder,FormGroupExtension,RxFormGroup ,ResetFormType} from '@rxweb/reactive-form-validators'; 
@Component({
  selector: 'app-adminlabentry',
  templateUrl: './adminlabentry.component.html',
  styleUrls: ['./adminlabentry.component.css']
})
export class AdminlabentryComponent implements OnInit {

  LaboratoryRegistrationForm: RxFormGroup;;
  submitted = false;

  constructor(private formBuilder: RxFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private addLab:MainservicesService) { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.active-tab3').css('display', 'inline-block');
      $('.as-link3').css('background-color', 'rgb(70, 146, 233)');
      $('.as-link3').css('color', 'white');
      $('.as-link3').css('border-radius', '20px');
      $('.active-tab1').css('display', 'none');
      $('.as-link1').css('background-color', 'white');
      $('.as-link2').css('background-color', 'white');

      $('.as-link1').css('color', 'black');
      $('.as-link1').css('border-radius', '20px');
      $('.active-tab2').css('display', 'none');

      $('.as-link2').css('color', 'black');
      $('.as-link2').css('border-radius', '20px');

    });

    this.LaboratoryRegistrationForm =<RxFormGroup> this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Age: ['', [Validators.required]],
      Gender: ['Male', [Validators.required]],
     
    });
  }

  get f() { return this.LaboratoryRegistrationForm.controls; }

  onSubmit() {

    this.submitted = true;


    if (this.LaboratoryRegistrationForm.valid) {
      console.log(this.LaboratoryRegistrationForm);
      if (this.LaboratoryRegistrationForm.valid) {
        console.log(this.LaboratoryRegistrationForm);
  
        this.addLab.AddLab(
          this.LaboratoryRegistrationForm.value.FirstName,
          this.LaboratoryRegistrationForm.value.LastName,
          this.LaboratoryRegistrationForm.value.email,
          this.LaboratoryRegistrationForm.value.password,
          String(this.LaboratoryRegistrationForm.value.Age),
          this.LaboratoryRegistrationForm.value.Gender,
          
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
      return this.LaboratoryRegistrationForm.invalid;
    }

  }

  
}
reset(){
  this.LaboratoryRegistrationForm.resetForm({resetType:ResetFormType.ControlsOnly}); 
  Object.keys(this.LaboratoryRegistrationForm.controls).forEach(key => {
    this.LaboratoryRegistrationForm.controls[key].setErrors(null)
  });
}
}
