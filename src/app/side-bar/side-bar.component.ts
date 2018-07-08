import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  toggle: boolean = false;

  constructor(private stateService: StateService) { 
    this.stateService.setState(this.toggle);
  }

  ngOnInit() {
  }

  toggleView() {
    this.toggle = !this.toggle;
    this.stateService.setState(this.toggle);
  }

}
