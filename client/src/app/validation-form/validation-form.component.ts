import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css']
})
export class ValidationFormComponent  {

  constructor() { }

  logForm(value: any) {
    console.log(value);
  }

  

}
