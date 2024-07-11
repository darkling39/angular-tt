import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  urlUsers: string = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.urlUsers)
  }
  getSingleUser(id: number): Observable<IUser>{
    return this.http.get<IUser>(`${this.urlUsers}/${id}`)
  }
  postUser(user: IUser): Observable<IUser>{
    return this.http.post<IUser>(this.urlUsers, user)
  }
}
