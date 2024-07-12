import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private http: HttpService,
    private auth: AuthService,
    private router: Router
  ) {}

  $users = this.http.getAllUsers().subscribe();
  loginForm!: FormGroup;
  invalidData = false;
  submitForm() {
    if (this.loginForm.value) {
      this.auth.logIn(this.loginForm.value);
      if (!this.auth.isLoggedIn()) {
        this.invalidData = true;
      } else {
        this.invalidData = false;
      }
    }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    if (this.auth.isLoggedIn()) {
      this.router.navigate(['../list']);
    }
  }
}
