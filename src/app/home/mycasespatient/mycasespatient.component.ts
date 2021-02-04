import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 

@Component({
  selector: 'app-mycasespatient',
  templateUrl: './mycasespatient.component.html',
  styleUrls: ['./mycasespatient.component.css']
})
export class MycasespatientComponent implements OnInit {

  constructor() { }

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
  }

}
