import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  toggle: boolean;
  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.stateService.openState.subscribe(state => {
      this.toggle = state;
    })
  }

}
