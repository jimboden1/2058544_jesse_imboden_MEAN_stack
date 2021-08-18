import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Tracker';
  displayedColumns: string[] = ['id', 'name', 'task', 'deadline'];
  tasks:Array<Task>=[];
  addTask(taskRef:NgForm){
    let task= taskRef.value;
    this.tasks.push(new Task(task.id,task.name,task.task,task.deadline));
  }
}


class Task{
  constructor(public id:number,public name:string, public task:string, public deadline:Date){}
}
