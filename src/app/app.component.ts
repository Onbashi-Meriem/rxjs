import { Component } from '@angular/core';
import { defer, from, interval, Observable, of, range, Subscription, timer } from 'rxjs';

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

  //   const publisher = timer(5000, 1000);

  //   this.subscription = publisher.subscribe(
  //     (val) => {
  //       console.log('Bu islem sayfada 5 sn sonra görünecek =' + val);
  //     },
  //     (err) => {},
  //     () => {
  //       console.log('islem tamamlandi');
  //     }
  //   );

  // -----------range----------

  // let publisher=range(0,20)

  // publisher.subscribe((val)=>{
  //   console.log(val)

  // },err=>{},()=>{
  //   console.log('islem tamamlandi')
  // })
 


  // ----------from-----------

//   const map=new Map();

//   map.set(1,'Kitaplar');
//   map.set(  2,'Kalemler');
//   map.set(  3,'Silgiler');

//   const publisher=from(map)

// this.subscription=publisher.subscribe((val)=>{

//   console.log(`${val[0]} = ${val[1]}`);
//   console.log(val);
//   console.log(typeof val, typeof `${val}`)
//   console.log(`${val}`);

// },err=>{},()=>{
//   console.log('islem tamamlandi');
  
// })

const publisher=of(new Date())
const publisher2=defer(()=>of(new Date()))

const myTimer=timer(3000)

myTimer.subscribe((val)=>{
publisher.subscribe(date1=>{
  console.log('date without defer', date1,)
})
publisher2.subscribe(date2=>{
  console.log('date with defer', date2,)
})
},()=>{
  console.log('islem tamamlandi');
  
})

 }
  stop() {
    // this.subscription.unsubscribe();
  }
}
