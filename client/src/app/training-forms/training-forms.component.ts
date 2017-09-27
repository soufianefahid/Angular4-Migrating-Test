import { Component, OnInit } from '@angular/core';
import { FormsModule ,  FormBuilder, FormGroup ,FormControl , ReactiveFormsModule, Validators}   from '@angular/forms';
import { Hero }  from '../models/hero'
@Component({
  selector: 'app-training-forms',
  templateUrl: './training-forms.component.html',
  styleUrls: ['./training-forms.component.css']
})
export class TrainingFormsComponent{
  public myHero : Hero;
  public heroForm : FormGroup;
  hero : Hero;
  public powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
  public model: Hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  public submitted: boolean = false;

  constructor() { 
    this.myHero = new Hero(42, 'SkyDog',
    'Fetch any object at any distance',
    'Leslie Rollover');console.log('My hero is called ' + this.myHero.name);

  }
  
  
  newHero() {
    this.model = new Hero(42, '', '');
  }  
  get name() { return this.heroForm.get('name'); }
  
  get power() { return this.heroForm.get('power'); }
  onSubmit() { this.submitted = true;
  console.log("submitted"); }

// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }

}
