import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
  }



  getlist() {
    return this.http.post("https://project-unknown-api-88wq.onrender.com/list", { "id": 1 });
  }
}
