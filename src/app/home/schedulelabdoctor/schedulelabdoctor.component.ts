import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-schedulelabdoctor',
  templateUrl: './schedulelabdoctor.component.html',
  styleUrls: ['./schedulelabdoctor.component.css']
})
export class SchedulelabdoctorComponent implements OnInit {

  NewRequestTestForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,) { }


  ngOnInit(): void {

    $(document).ready(function () {
      $('.active-tab3').css('display', 'inline-block');
      $('.as-link3').css('background-color', 'rgb(70, 146, 233)');
      $('.as-link3').css('color', 'white');
      $('.as-link3').css('border-radius', '20px');
      $('.active-tab2').css('display', 'none');
      $('.as-link2').css('background-color', 'white');
      $('.as-link2').css('color', 'black');
      $('.as-link2').css('border-radius', '20px');
      $('.as-link1').css('background-color', 'white');

      $('.active-tab1').css('display', 'none');

      $('.as-link1').css('color', 'black');
      $('.as-link1').css('border-radius', '20px');

      $('.active-tab4').css('display', 'none');
      $('.as-link4').css('background-color', 'white');
      $('.as-link4').css('color', 'black');
      $('.as-link4').css('border-radius', '20px');

    });

    this.NewRequestTestForm = this.formBuilder.group({
    
      PatientId: ['', [Validators.required]],
      Date: ['', [Validators.required]],
      LabType: ['', [Validators.required]],
     
    });
 

  }

  get f() { return this.NewRequestTestForm.controls; }

  onSubmit() {

    this.submitted = true;


    if (this.NewRequestTestForm.valid) {
      console.log(this.NewRequestTestForm);

     

    }
    else {
      return this.NewRequestTestForm.invalid;
    }

  }


}
