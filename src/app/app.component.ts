import { Component } from '@angular/core';
import { interval, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs';

  constructor(){
     
    // const values=of('fatih', 4,[1,2,3,4],'mehmet',4.12)

    // values.subscribe(data=>{
    //   console.log(data)
    // })

    const publisher=interval(1000)

    publisher.subscribe(val=>{
      console.log("data",val)
    },err=>{},()=>{
      console.log('islem bitti')
    })
  }
}
