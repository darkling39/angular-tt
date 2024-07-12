
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


  setToken(token: string, userLogin: string): void{
    localStorage.setItem('token', token)
    localStorage.setItem('username', userLogin)
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
        list.map(item => {
          if(
            item.login === user.login &&
            item.password === user.password
          ){
            this.setToken(item.token, item.login)
            this.router.navigate(['../list'])
          }
          else{
          }
        })
      })
    ).subscribe()
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
