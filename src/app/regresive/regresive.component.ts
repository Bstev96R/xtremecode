import { Component, OnInit } from '@angular/core';
import * as countdown from 'countdown';

interface Time{
  days:number,
  hours:number,
  minutes:number,
  seconds:number
}

@Component({
  selector: 'app-regresive',
  templateUrl: './regresive.component.html',
  styleUrls: ['./regresive.component.css']
})
export class RegresiveComponent implements OnInit {

  time: Time = null;
  timerId: number = null;
  constructor() { }

  ngOnInit() {
    let date = new Date("2020-04-10");
    this.timerId =countdown(date, (ts)=>{
      this.time = ts;
    }, countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS)
  }

  ngOnDestroy(): void {
    if(this.timerId){
      clearInterval(this.timerId);
    }
  }
 
}
