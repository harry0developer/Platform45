import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  openState = new Subject<boolean>();

  setState(state = false) {
    this.openState.next(state);
  }

}
