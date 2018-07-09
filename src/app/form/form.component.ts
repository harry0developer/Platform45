import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { StateService } from '../state.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm: FormGroup;
  toggle: boolean;
  male: boolean = false;
  female: boolean = false;
  classic: boolean = true;
  silver: boolean = false;
  gold: boolean = false;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private stateService: StateService, private formBulder: FormBuilder) { 
    this.userForm = this.formBulder.group({
      'name' : [null, [Validators.required, Validators.minLength(3)]],
      'gender' : [null, Validators.required],
      'dateOfBirth' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.pattern(this.emailPattern)] ],
      'mobile' : [null, [Validators.required, Validators.minLength(10)]],
      'customerId' : [null, [Validators.required, Validators.minLength(14)]],
      'memebership' : [null, Validators.required],
    })
  }

  ngOnInit() {
    this.stateService.openState.subscribe(state => {
      this.toggle = state;
    });
  }
  resetForm() { 
    this.userForm.reset();
  } 

  markActiveGender(id){
    if(id === 'male'){
      this.male = true;
      this.female = false;
    } else {
      this.male = false;
      this.female = true;
    }
  }

  markActivePackage(id){
    if(id === 'classic'){
      this.classic = true;
      this.silver = false;
      this.gold = false;
    } else if(id === 'silver'){
      this.classic = false;
      this.silver = true;
      this.gold = false;
    } else {
      this.classic = false;
      this.silver = false;
      this.gold = true;
    }
  }

}
