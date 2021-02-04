import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-adminpatiententry',
  templateUrl: './adminpatiententry.component.html',
  styleUrls: ['./adminpatiententry.component.css']
})
export class AdminpatiententryComponent implements OnInit {

  PatientRegistrationForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
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


    this.PatientRegistrationForm = this.formBuilder.group({
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

     

    }
    else {
      return this.PatientRegistrationForm.invalid;
    }

  }

}
