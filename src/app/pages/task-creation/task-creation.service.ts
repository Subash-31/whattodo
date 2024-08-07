import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskCreationService {

  constructor(private http: HttpClient) {
  }

  createData(data: any) {
    return this.http.post("https://project-unknown-api-88wq.onrender.com/add-task", data);
  }
}
