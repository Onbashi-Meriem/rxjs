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
  find,
  filter
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
    const myArray = from([5, 10, 15, 20, 30, 40, 300, 600]);

    // -------------first-------

    // myArray.subscribe((val) => {
    //   console.log('ohne first()=>' + val);
    // });

    // myArray.pipe(first()).subscribe((val) => {
    //   console.log('fist()=>', val);
    // });

    // myArray.pipe(first((val) => val > 750)).subscribe(
    //   (val) => {
    //     console.log('first >20=>', val);
    //   },
    //   (err) => {
    //     console.log(err.message);
    //   }
    // );

    // --------------find--------- //aranan degeri bulamazsa undefined doner

    // myArray.pipe(find(val=>val>750)).subscribe(data=>{
    //   console.log("find metodu",data)
    // })

     // --------------filter--------- sarti saglayan her degeri doner

     myArray.pipe(filter(val=>val>15)).subscribe(data=>{
      console.log(data)
     })


  }
}
