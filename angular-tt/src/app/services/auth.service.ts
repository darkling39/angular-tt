
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IUser } from '../models/user';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService, private router: Router) { }

  setToken(token: string): void{
    localStorage.setItem('token', token)
  }
  getToken(): string | null{
    return localStorage.getItem('token')
  }
  isLoggedIn(): boolean{
    return this.getToken() !== null
  }
  logIn(user: IUser){
    this.httpService.getAllUsers().pipe(
      map(list => {
        console.log(list);
        
        list.map(item => {
          if(
            item.login === user.login &&
            item.password === user.password
          ){
            this.setToken(item.token)
            this.router.navigate(['../list'])
          }
        })
      })
    ).subscribe(data => console.log(data))
  }

  registerUser(user: IUser){
    user.token = this.makeRandom()
    this.httpService.postUser(user).subscribe()
  }

  makeRandom() {
    const possible: string =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]=-)(*&^%$#@!~`";
    let text: string = '';
    for (let i = 0; i < 15; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
