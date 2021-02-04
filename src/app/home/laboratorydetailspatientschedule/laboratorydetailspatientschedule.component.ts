import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-laboratorydetailspatientschedule',
  templateUrl: './laboratorydetailspatientschedule.component.html',
  styleUrls: ['./laboratorydetailspatientschedule.component.css']
})
export class LaboratorydetailspatientscheduleComponent implements OnInit {

  CaseDetailsForm: FormGroup;
  submitted = false;

  CaseDetailsForm2: FormGroup;
  submitted2 = false;

  CaseDetailsForm3: FormGroup;
  submitted3 = false;


  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,) { }


    ishemoglobin;
    isCorona;
    isDengue;

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

    this.ishemoglobin=true;
    this.isCorona=false;
    this.isDengue=false;


    this.CaseDetailsForm = this.formBuilder.group({
    
      Hemoglobin: ['', [Validators.required]],
     
    });

    this.CaseDetailsForm2 = this.formBuilder.group({
    
      
      Corona: ['No', [Validators.required]],
     
     
    });

    this.CaseDetailsForm3 = this.formBuilder.group({
    
     
      Dengue: ['No', [Validators.required]],
     
    });

  }

  get f() { return this.CaseDetailsForm.controls; }
  get f2() { return this.CaseDetailsForm2.controls; }
  get f3() { return this.CaseDetailsForm3.controls; }


  onSubmit() {

    this.submitted = true;


    if (this.CaseDetailsForm.valid) {
      console.log(this.CaseDetailsForm);

     

    }
    else {
      return this.CaseDetailsForm.invalid;
    }

  }


  onSubmit2() {

    this.submitted2 = true;


    if (this.CaseDetailsForm2.valid) {
      console.log(this.CaseDetailsForm2);

     

    }
    else {
      return this.CaseDetailsForm2.invalid;
    }

  }


  onSubmit3() {

    this.submitted3 = true;


    if (this.CaseDetailsForm3.valid) {
      console.log(this.CaseDetailsForm3);

     

    }
    else {
      return this.CaseDetailsForm3.invalid;
    }

  }


}
