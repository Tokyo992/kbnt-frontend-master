import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks, TaskTypeOption } from '../class/Tasks';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
// First Method
// constructor(private httpclient: HttpClient) { }

  // getTaskList(): Observable <Array<Tasks>> {
  //  return this.httpclient
  //   .get('http://localhost:3000/tasks')
  //   .pipe(map((d: Array<Tasks>) => d));
  // }

  //SECOND METHOD

  // constructor(private http : HttpClient) {  }
  // url : string = "http://localhost:3000/tasks";

  // getTasks() {
  //   return this.http.get<Tasks[]>(this.url);
  // }


  /// new task list
  constructor (private httpclient: HttpClient) {}



  //THIRD METHOD
  //FIRST APP

  getTaskList():  Observable<any> {
    return this.httpclient
      .get('http://localhost:3000/tasks');

  }
  // getTasks(): Observable<any> {
  //   return this.httpclient
  //   .get('http://localhost:3000/tasks');
  // }

  postTask(task: Tasks): Observable<any> {
     return this.httpclient
     .post('http://localhost:3000/tasks', task);
   }
  updateTask(task: Tasks, id: string): Observable<any> {
     return this.httpclient
     .put(`http://localhost:3000/tasks/${id}`, task);
   }
   deleteTask(id: string) {
    return this.httpclient
    .delete(`http://localhost:3000/tasks/${id}`);
  }
  getTaskById(id: string): Observable<any> {
    return this.httpclient
    .get(`http://localhost:3000/tasks/${id}`);
  }

  getTypeOptions():Array<TaskTypeOption> {
    return [{ type: 'todo' }, { type: 'pending' }, { type: 'done' }];
  }


}
