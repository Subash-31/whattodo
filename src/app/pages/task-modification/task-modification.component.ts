import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task/task.service';
import { Task } from 'src/app/task';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-task-modification',
  templateUrl: './task-modification.component.html',
  styleUrls: ['./task-modification.component.css']
})
export class TaskModificationComponent {


  currentTask?: Task;

  isFormCompleted: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private taskService: TaskService, private route: Router, private list: HomeService) { }

  ngOnInit() {
    this.getTask();
  }

  isCompleted() {
    if (this.currentTask!.content.length > 0 && this.currentTask?.category !== null) {
      this.isFormCompleted = true;
    } else {
      this.isFormCompleted = false;
    }
  }

  updateTask(updatedTask: Task) {
    this.currentTask = updatedTask;
    this.isCompleted();
  }

  getTask() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.list.getlist().subscribe((data: any) => {
      this.currentTask = data.data.documents.find((e: any) => e["$id"] == id);
    });

  }

  sendUpdateTask() {
    this.taskService.updateTask(this.currentTask!);
    this.route.navigate(["/Home"]);
  }

}
