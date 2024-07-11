import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { Observable} from 'rxjs';
import { ITask } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  urlUsers: string = 'http://localhost:3000/users'
  urlTasks: string = 'http://localhost:3000/tasks'

  constructor(private http: HttpClient) { }


// Users

  getAllUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.urlUsers)
  }
  getSingleUser(id: number): Observable<IUser>{
    return this.http.get<IUser>(`${this.urlUsers}/${id}`)
  }
  postUser(user: IUser): Observable<IUser>{
    return this.http.post<IUser>(this.urlUsers, user)
  }


//Tasks

  getAllTasks(): Observable<ITask[]>{
    return this.http.get<ITask[]>(this.urlTasks)
  }
  getSingleTask(id: string): Observable<ITask>{
    return this.http.get<ITask>(`${this.urlTasks}/${id}`)
  }
  postTask(task: ITask): Observable<ITask>{
    return this.http.post<ITask>(this.urlTasks, task)
  }
  updateTask(task: ITask) {
    return this.http.put<ITask>(
      `${this.urlTasks}/${task.id}`,
      task
    );
  }
  deleteTask(id:string){
    return this.http.delete<any>(`${this.urlTasks}/${id}`);
  }

}
