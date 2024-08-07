import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service';
import { Task } from 'src/app/task';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  todoList: any[] = [];

  nonUrgentTaskExists: boolean = false;
  urgentTaskExists: boolean = false;

  constructor(private taskService: TaskService, private gettasklist: HomeService) {
    this.gettasklist.getlist().subscribe((data: any) => {
      this.todoList = data.data.documents
    });
  }


  ngOnInit() {
    // this.todoList = this.getToDoList();
    this.checkTasksPriority(this.todoList);
    this.gettasklist.getlist().subscribe((data: any) => {
      this.todoList = data.data.documents
    });
  }

  getToDoList(): Task[] {
    return this.taskService.getUnDoneTasks();
  }

  checkTasksPriority(todoList: Task[]) {
    if (todoList.map(item => item.isUrgent).includes(true)) {
      this.urgentTaskExists = true;
    } else {
      this.urgentTaskExists = false;
    }
    if (todoList.map(item => item.isUrgent).includes(false)) {
      this.nonUrgentTaskExists = true;
    } else {
      this.nonUrgentTaskExists = false;
    }
  }

  setTaskAsDone(task: Task) {
    this.taskService.setAsDone(task);
    this.todoList = this.getToDoList();
    this.checkTasksPriority(this.todoList);
  }

  filterCategories(tasklist: Task[]) {
    debugger
    this.todoList = tasklist;
    this.checkTasksPriority(this.todoList)
  }


}
