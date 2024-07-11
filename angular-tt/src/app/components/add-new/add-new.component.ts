import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit{
  constructor(private http:HttpService, private router: Router){}

  addNewForm!: FormGroup
  submitForm(){
    if(this.addNewForm.value){
      this.http.postTask(this.addNewForm.value).subscribe((data) => {
        console.log(data);
        this.router.navigate(['../list'])
      })
    }
  }
  ngOnInit(): void {
    this.addNewForm = new FormGroup({
      date: new FormControl(''),
      time: new FormControl(''),
      note: new FormControl('')
    })
  }
}
