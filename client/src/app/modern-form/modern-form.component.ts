import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators}   from '@angular/forms';

@Component({
  selector: 'app-modern-form',
  templateUrl: './modern-form.component.html',
  styleUrls: ['./modern-form.component.css']
})
export class ModernFormComponent {
  complexForm : FormGroup;
  constructor(fb: FormBuilder){
    
    this.complexForm = fb.group({
      // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
      'firstName' : [null, Validators.required],
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'gender' : ['Female', Validators.required],
      'hiking' : false,
      'running' : false,
      'swimming' : false
    })
  }

  submitForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log(value);
  }

}
