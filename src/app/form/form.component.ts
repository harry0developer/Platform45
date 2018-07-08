import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StateService } from '../state.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm: any;
  toggle: boolean;
  male: boolean = false;
  female: boolean = false;
  classic: boolean = true;
  silver: boolean = false;
  gold: boolean = false;
  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.stateService.openState.subscribe(state => {
      this.toggle = state;
    });
    this.userForm = new FormGroup({
      name: new FormControl(),
      gender: new FormControl(),
      dob: new FormControl(),
      email: new FormControl(),
      mobile: new FormControl(),
      customerId: new FormControl(),
      memebership: new FormControl()
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
