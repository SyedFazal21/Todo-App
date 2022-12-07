import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public userId;

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get('http://localhost:3000/task/' + this.userId);
  }

  getTaskById(id) {
    return this.http.get('http://localhost:3000/task/get/' + id);
  }

  createTask(task: string, status: number) {
    return this.http.post('http://localhost:3000/task/' + this.userId, {
      task,
      status,
    });
  }

  updateTask(task: string, status: number, taskId: string) {
    return this.http.put('http://localhost:3000/task/' + taskId, {
      task,
      status,
    });
  }
}
