import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PasswordService } from 'src/app/services/password.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

    constructor(private auth: AuthService, private router: Router, private pass: PasswordService){}

  regForm!: FormGroup
  passQuality: string = ''
  currentPass: string 
  submitForm(){
    if(this.regForm.value){
      this.auth.registerUser(this.regForm.value)
      this.router.navigate(['../login']);
    }
  }
  ngOnInit(): void {
    this.regForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
    this.regForm.get('password')?.valueChanges.subscribe(pass => {
      this.currentPass = pass
      this.passQuality = this.pass.updateQuality(this.regForm, this.passQuality)
      
    })
  }
}
