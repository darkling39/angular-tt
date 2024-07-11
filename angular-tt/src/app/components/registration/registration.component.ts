import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

    constructor(private auth: AuthService, private router: Router){}

  regForm!: FormGroup
  submitForm(){
    if(this.regForm.value){
      this.auth.registerUser(this.regForm.value)
      this.router.navigate(['../login']);
    }
  }
  ngOnInit(): void {
    this.regForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
}
