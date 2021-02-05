import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { MainservicesService } from 'src/app/service/mainservices.service'
import { RxFormBuilder,FormGroupExtension,RxFormGroup ,ResetFormType} from '@rxweb/reactive-form-validators'; 
@Component({
  selector: 'app-requesttestpatient',
  templateUrl: './requesttestpatient.component.html',
  styleUrls: ['./requesttestpatient.component.css']
})
export class RequesttestpatientComponent implements OnInit {

  NewRequestTestForm: RxFormGroup;
  submitted = false;


  DoctorList;
  DoctorListFirstName;
  DoctorListLastName;
  DoctorListId;

  constructor(private formBuilder: RxFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private addRequest:MainservicesService) { }

  ngOnInit(): void {

    $(document).ready(function () {
      $('.active-tab3').css('display', 'inline-block');
      $('.as-link3').css('background-color', 'rgb(70, 146, 233)');
      $('.as-link3').css('color', 'white');
      $('.as-link3').css('border-radius', '20px');
      $('.active-tab1').css('display', 'none');
      $('.as-link1').css('background-color', 'white');
      $('.as-link1').css('color', 'black');
      $('.as-link1').css('border-radius', '20px');
      $('.as-link4').css('background-color', 'white');

      $('.active-tab4').css('display', 'none');

      $('.as-link4').css('color', 'black');
      $('.as-link4').css('border-radius', '20px');

      $('.active-tab2').css('display', 'none');
      $('.as-link2').css('background-color', 'white');
      $('.as-link2').css('color', 'black');
      $('.as-link2').css('border-radius', '20px');

    });

    this.addRequest.AllDoctors(
        
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
    this.NewRequestTestForm =<RxFormGroup> this.formBuilder.group({
    
      PatientId: [currentPatientId, [Validators.required]],
      Date: ['', [Validators.required]],
      Doctor: ['', [Validators.required]],
      LabType: ['', [Validators.required]],
     
    });

  }

  get f() { return this.NewRequestTestForm.controls; }

  onSubmit() {

    this.submitted = true;
    var DatePass=this.NewRequestTestForm.value.Date
    var c=DatePass.split('-');
    
    DatePass=c[2]+'-'+c[1]+'-'+c[0]
    var currentPatientId=localStorage.getItem('currentUserId')
    if (this.NewRequestTestForm.valid) {
      console.log(this.NewRequestTestForm);


      if(this.NewRequestTestForm.value.LabType=="Corona"){

        this.addRequest.SchedulePatientCovidTest(

          currentPatientId,
          this.NewRequestTestForm.value.Doctor,
          " ",
          DatePass
           
            
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
      else if(this.NewRequestTestForm.value.LabType=="Dengue"){

        this.addRequest.SchedulePatientDengueTest(

          currentPatientId,
          this.NewRequestTestForm.value.Doctor,
          " ",
          DatePass
           
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
      else if(this.NewRequestTestForm.value.LabType=="Blood"){


        this.addRequest.SchedulePatientBloodTest(

          currentPatientId,
          this.NewRequestTestForm.value.Doctor,
          " ",
          DatePass
            
           
            
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

     

    }
    else {
      return this.NewRequestTestForm.invalid;
    }

  }

  reset(){
    this.NewRequestTestForm.resetForm({resetType:ResetFormType.ControlsOnly}); 
    Object.keys(this.NewRequestTestForm.controls).forEach(key => {
      this.NewRequestTestForm.controls[key].setErrors(null)
    });
  }
}
