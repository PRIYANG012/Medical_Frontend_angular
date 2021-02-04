import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-newcaseregisterpatient',
  templateUrl: './newcaseregisterpatient.component.html',
  styleUrls: ['./newcaseregisterpatient.component.css']
})
export class NewcaseregisterpatientComponent implements OnInit {

  NewCaseRegistrationForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,) { }

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

    this.NewCaseRegistrationForm = this.formBuilder.group({
    
      PatientId: ['123', [Validators.required]],
      Date: ['', [Validators.required]],
      ProblemType: ['', [Validators.required]],
      Doctor: ['', [Validators.required]],
      Summary: ['', [Validators.required]],
    });
  }

  get f() { return this.NewCaseRegistrationForm.controls; }

  onSubmit() {

    this.submitted = true;


    if (this.NewCaseRegistrationForm.valid) {
      console.log(this.NewCaseRegistrationForm);

     

    }
    else {
      return this.NewCaseRegistrationForm.invalid;
    }

  }

}
