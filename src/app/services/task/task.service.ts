import { Injectable } from '@angular/core';
import { CategoryType, Task } from 'src/app/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  /* 
  CREATE
  **/
  createNewTask(): Task {
    const newTask: Task = {
      id: undefined,
      content: "",
      category: null,
      isUrgent: false,
      doneDate: null,
      name: '',
      createdAt: new Date(),
      label: 1,
      updatedAt: new Date(),
      userId: 1,
      categoriesId: 1,
      deadlines: new Date(),
      status: 'open',
      deletedAt: null,
      tenant: '',
      createdAtSystem: new Date(),
      updatedAtSystem: new Date(),
      permissions: [],
      databaseId: '',
      collectionId: ''
    };
    return newTask;
  }

  addToList(newTask: Task): void {
    newTask.id = this.generateId();
    const toDoList = this.getToDos();
    toDoList.push(newTask);
    this.saveToDos(toDoList);
  }

  /* 
  UPDATE
  **/
  changeTaskCategory(currentTask: Task, categorySelected: string): void {
    const newCategory = categorySelected as CategoryType;
    currentTask.category = newCategory;
  }

  changeTaskPriority(currentTask: Task): void {
    currentTask.isUrgent = !currentTask.isUrgent;
  }

  changeTaskContent(currentTask: Task, newContent: string): void {
    currentTask.content = newContent;
  }

  setAsDone(currentTask: Task): void {
    const toDoList = this.getToDos();
    const id = currentTask.id;
    const taskToFind = toDoList.find(task => task.id === id);

    if (taskToFind) {
      const index = toDoList.indexOf(taskToFind);
      currentTask.doneDate = new Date();

      toDoList.splice(index, 1, currentTask);
      this.saveToDos(toDoList);
    }
  }

  setAsUndone(currentTask: Task): void {
    const toDoList = this.getToDos();
    const id = currentTask.id;
    const taskToFind = toDoList.find(task => task.id === id);

    if (taskToFind) {
      const index = toDoList.indexOf(taskToFind);
      currentTask.doneDate = null;

      toDoList.splice(index, 1, currentTask);
      this.saveToDos(toDoList);
    }
  }

  updateTask(currentTask: Task): void {
    const toDoList = this.getToDos();
    const id = currentTask.id;
    const taskToFind = toDoList.find(task => task.id === id);

    if (taskToFind) {
      const index = toDoList.indexOf(taskToFind);
      toDoList.splice(index, 1, currentTask);
      this.saveToDos(toDoList);
    }
  }

  /* 
  GET
  **/
  getDoneTasks(): Task[] {
    const allTasks = this.getToDos();
    return allTasks.filter(task => task.doneDate !== null);
  }

  getUnDoneTasks(): Task[] {
    const allTasks = this.getToDos();
    return allTasks.filter(task => task.doneDate === null);
  }

  getTaskById(id: number): Task | undefined {
    const toDoList = this.getToDos();
    return toDoList.find(task => task.id === id);
  }

  // LocalStorage
  createToDoStorage(): void {
    const toDoStorage = JSON.stringify([]);
    localStorage.setItem('todo', toDoStorage);
  }

  getToDos(): Task[] {
    const toDoList = localStorage.getItem('todo');
    if (toDoList) {
      return JSON.parse(toDoList).map((task: any) => ({
        ...task,
        createdAt: new Date(task.createdAt),
        updatedAt: new Date(task.updatedAt),
        deadlines: new Date(task.deadlines),
        doneDate: task.doneDate ? new Date(task.doneDate) : null,
        createdAtSystem: new Date(task.createdAtSystem),
        updatedAtSystem: new Date(task.updatedAtSystem)
      }));
    } else {
      this.createToDoStorage();
      return this.getToDos();
    }
  }

  generateId(): number {
    const toDoList = this.getToDos();
    return toDoList.length > 0 ? Math.max(...toDoList.map(task => task.id || 0)) + 1 : 1;
  }

  saveToDos(tasks: Task[]): void {
    localStorage.setItem('todo', JSON.stringify(tasks));
  }
}
