import { Component, OnInit, Input,ViewChild } from '@angular/core';
import {TimerComponent} from '../timer/timer.component';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  
  @ViewChild('counter', {read:TimerComponent})
  private counter: TimerComponent;

  counterState = 'cronometro de subasta';

  constructor() { }

  ngOnInit() {
    this.counter.startAt = 120;
    this.counter.counterState.subscribe((msg)=>{
      if(msg==='COMPLETE') {
        this.counterState = 'tiempo terminado';
      }
    });
    this.counter.start();
  }

}
