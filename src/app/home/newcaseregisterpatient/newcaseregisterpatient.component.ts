import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { MainservicesService } from 'src/app/service/mainservices.service'
import { RxFormBuilder,FormGroupExtension,RxFormGroup ,ResetFormType} from '@rxweb/reactive-form-validators'; 
@Component({
  selector: 'app-newcaseregisterpatient',
  templateUrl: './newcaseregisterpatient.component.html',
  styleUrls: ['./newcaseregisterpatient.component.css']
})
export class NewcaseregisterpatientComponent implements OnInit {

  NewCaseRegistrationForm: RxFormGroup;
  submitted = false;


  DoctorList;
  DoctorListFirstName;
  DoctorListLastName;
  DoctorListId;
  constructor(private formBuilder: RxFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private addCase:MainservicesService) { }


  
  ngOnInit(): void {
    $(document).ready(function () {
      $('.active-tab2').css('display', 'inline-block');
      $('.as-link2').css('background-color', 'rgb(70, 146, 233)');
      $('.as-link2').css('color', 'white');
      $('.as-link2').css('border-radius', '20px');
      $('.active-tab1').css('display', 'none');
      $('.as-link1').css('background-color', 'white');
      $('.as-link1').css('color', 'black');
      $('.as-link1').css('border-radius', '20px');
      $('.as-link3').css('background-color', 'white');

      $('.active-tab3').css('display', 'none');

      $('.as-link3').css('color', 'black');
      $('.as-link3').css('border-radius', '20px');

      $('.active-tab4').css('display', 'none');
      $('.as-link4').css('background-color', 'white');
      $('.as-link4').css('color', 'black');
      $('.as-link4').css('border-radius', '20px');

    });

    this.addCase.AllDoctors(
        
        ).subscribe(data =>{
         this.DoctorList=data;
        
        

         for(var v=0; v<this.DoctorList.length; v++)
         {
           this.DoctorListFirstName=this.DoctorList[v]["first_name"]
           this.DoctorListLastName=this.DoctorList[v]["last_name"]
           this.DoctorListId=this.DoctorList[v]["doc_id"]
         }

         
     },
     err => {
       console.log(err['status'])
       if(err['status'] == '400'){
       }
       else if(err['status'] == '500'){
       }
     }
     
     )


    var currentPatientId=localStorage.getItem('currentUserId')
    this.NewCaseRegistrationForm =<RxFormGroup> this.formBuilder.group({
    
      PatientId: [currentPatientId, [Validators.required]],
      Date: ['', [Validators.required]],
      ProblemType: ['', [Validators.required]],
      Doctor: ['', [Validators.required]],
      Summary: ['', [Validators.required]],
    });
  }

  get f() { return this.NewCaseRegistrationForm.controls; }

  onSubmit() {

    this.submitted = true;
    var DatePass=this.NewCaseRegistrationForm.value.Date
    var c=DatePass.split('-');
    
    DatePass=c[2]+'-'+c[1]+'-'+c[0]
    
    var currentPatientId=localStorage.getItem('currentUserId')
    if (this.NewCaseRegistrationForm.valid) {
     

      this.addCase.AddCase(
        currentPatientId,
        DatePass,
        this.NewCaseRegistrationForm.value.ProblemType,
        this.NewCaseRegistrationForm.value.Doctor,
        String(this.NewCaseRegistrationForm.value.Summary),
       
        
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
      return this.NewCaseRegistrationForm.invalid;
    }

  }

  reset(){
    this.NewCaseRegistrationForm.resetForm({resetType:ResetFormType.ControlsOnly}); 
    Object.keys(this.NewCaseRegistrationForm.controls).forEach(key => {
      this.NewCaseRegistrationForm.controls[key].setErrors(null)
    });
  }

}
