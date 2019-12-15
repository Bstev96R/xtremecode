import { Component, OnInit, Input,Output,EventEmitter,ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit {
  @Input()
  startAt=0;
@Output()
counter = new EventEmitter<string>();
CurrentValue='';
private currentSubscription: Subscription;
counterState = new EventEmitter();


  constructor(private changeDetector : ChangeDetectorRef ) { }

  ngOnInit() {

    
  }

  public start() {
    this.CurrentValue =this.formValue(this.startAt);
    this.changeDetector.detectChanges();

    const t: Observable<number> = interval(1000);
    this.currentSubscription = t.pipe(take(this.startAt)).pipe(map(v => this.startAt - (v + 1))).subscribe(v => {
        this.CurrentValue = this.formValue(v);
        this.changeDetector.detectChanges();
      }, err => {
        this.counterState.error(err);
      }, () => {
        this.currentSubscription.unsubscribe();
        this.CurrentValue = '00:00';
        this.counterState.emit('COMPLETE');
        this.changeDetector.detectChanges();
      });
  }

 private formValue(v){
  const minutes = Math.floor(v / 60);
  const formattedMinutes = '' + (minutes > 9 ? minutes : '0' + minutes);
  const seconds = v % 60;
  const formattedSeconds = '' + (seconds > 9 ? seconds : '0' + seconds);

return `${formattedMinutes}:${formattedSeconds}`;

 }

 public stop() {
  this.currentSubscription.unsubscribe();
  this.counterState.emit('ABORTED');
}


  

}
