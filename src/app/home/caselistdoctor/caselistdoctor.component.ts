import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-caselistdoctor',
  templateUrl: './caselistdoctor.component.html',
  styleUrls: ['./caselistdoctor.component.css']
})
export class CaselistdoctorComponent implements OnInit {

  CaseDetailsForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {

    $(document).ready(function () {
      $('.active-tab1').css('display', 'inline-block');
      $('.as-link1').css('background-color', 'rgb(70, 146, 233)');
      $('.as-link1').css('color', 'white');
      $('.as-link1').css('border-radius', '20px');
      $('.active-tab2').css('display', 'none');
      $('.as-link2').css('background-color', 'white');
      $('.as-link2').css('color', 'black');
      $('.as-link2').css('border-radius', '20px');
      $('.as-link3').css('background-color', 'white');

      $('.active-tab3').css('display', 'none');

      $('.as-link3').css('color', 'black');
      $('.as-link3').css('border-radius', '20px');

      $('.active-tab4').css('display', 'none');
      $('.as-link4').css('background-color', 'white');
      $('.as-link4').css('color', 'black');
      $('.as-link4').css('border-radius', '20px');

    });

    this.CaseDetailsForm = this.formBuilder.group({
    
      Note: ['', [Validators.required]],
      Prescription: ['', [Validators.required]],
      Status: ['Open', [Validators.required]],
     
    });
  }


  get f() { return this.CaseDetailsForm.controls; }

  onSubmit() {

    this.submitted = true;


    if (this.CaseDetailsForm.valid) {
      console.log(this.CaseDetailsForm);

     

    }
    else {
      return this.CaseDetailsForm.invalid;
    }

  }



}
