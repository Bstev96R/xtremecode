import { Component, OnInit,Input } from '@angular/core';
import * as countdown from 'countdown';
import { isString } from 'util';

interface Time{
  hours: number,
  minutes: number,
  seconds: number
}
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
time: Time;
timerID: number=null;
@Input() date: Date | string;
  constructor() { }

  ngOnInit() {
    if(isString(this.date)){
      this.date= new Date(this.date);
    }
    this.timerID=countdown(this.date,(ts)=>{
      console.log(ts);
      this.time=ts;
    },countdown.HOURS |countdown.MINUTES| countdown.SECONDS)
  }

  ngOnDestroy(){
    clearInterval(this.timerID)
  }

}
