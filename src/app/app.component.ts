import { Component } from '@angular/core';
import { interval, Observable, of, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs';
  subscription: Subscription;

  constructor() {
    //--------of----------

    // const values=of('fatih', 4,[1,2,3,4],'mehmet',4.12)

    // values.subscribe(data=>{
    //   console.log(data)
    // })

    // -------------interval----------

    // const publisher=interval(1000)

    // publisher.subscribe(val=>{
    //   console.log("data",val)
    // },err=>{},()=>{
    //   console.log('islem bitti')
    // })

    // ----------timer----------

    const publisher = timer(5000, 1000);

    this.subscription = publisher.subscribe(
      (val) => {
        console.log('Bu islem sayfada 5 sn sonra görünecek =' + val);
      },
      (err) => {},
      () => {
        console.log('islem tamamlandi');
      }
    );
  }

  stop() {
    this.subscription.unsubscribe();
  }
}
