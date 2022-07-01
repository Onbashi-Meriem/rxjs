import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  defer,
  from,
  interval,
  Observable,
  of,
  range,
  Subscription,
  timer,
  Observer,
  fromEvent,
  first,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs';
  subscription: Subscription;

  constructor() {
    // -------------first-------

    const myArray = from([5, 10, 15, 20, 30, 40, 300, 600]);
    myArray.subscribe((val) => {
      console.log('ohne first()=>' + val);
    });

    myArray.pipe(first()).subscribe((val) => {
      console.log('fist()=>', val);
    });

    myArray.pipe(first((val) => val > 20)).subscribe((val) => {
      console.log('first >20=>', val);
    });
  }
}
