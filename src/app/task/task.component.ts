import { Component, OnInit,Input } from '@angular/core';
import { Task} from '../models/task.interface';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input('task') task: Task;

  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

 removeTask(task : Task){
    const response= confirm('estas seguro que deseas removerlo')

 }

}
