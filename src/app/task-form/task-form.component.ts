import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {TaskService} from '../services/task.service';
import{Task} from '../models/task.interface';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  title: string;
  
  @Output() taskAdded= new EventEmitter<Task>();
  constructor() { }

  ngOnInit() {
  }

  addTask() {
    this.taskAdded.emit({
      title: this.title,
      
      hide: true
    });
    this.title="";
    
  }

}
