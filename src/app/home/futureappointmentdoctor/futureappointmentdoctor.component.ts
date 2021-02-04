import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 

@Component({
  selector: 'app-futureappointmentdoctor',
  templateUrl: './futureappointmentdoctor.component.html',
  styleUrls: ['./futureappointmentdoctor.component.css']
})
export class FutureappointmentdoctorComponent implements OnInit {

  constructor() { }

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
  }

}
