import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { HomeService } from 'src/app/pages/home/home.service';
import { TaskService } from 'src/app/services/task/task.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {


  todoList: Task[] = [];

  categoryType: string[] = ["shopping", "health", "work", "bills", "cleaning", "food", "exercise", "entertainment", "education", "travel", "social", "finance", "home", "pets", "others"];


  @Output() changeCategory = new EventEmitter();

  constructor(private taskService: TaskService, private gettasklist: HomeService, private cdrf: ChangeDetectorRef) { }

  filterCategory(category: string) {
    this.gettasklist.getlist().subscribe((data: any) => {
      this.todoList = data.data.documents
    });
    if (category === "all") {
      this.changeCategory.emit(this.todoList);
      this.cdrf.detectChanges();

    }
    else {
      // this.todoList = this.taskService.getUnDoneTasks();
      this.todoList = this.todoList.filter((task: any) => {
        return task.category === category;
      })
      this.changeCategory.emit(this.todoList);
      this.cdrf.detectChanges();
    }

  }

}
