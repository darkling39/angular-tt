import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css'],
})
export class AddNewComponent implements OnInit {
  constructor(private http: HttpService, private router: Router) {}

  addNewForm!: FormGroup;
  submitForm() {
    if (this.addNewForm.value) {
      this.http.postTask(this.addNewForm.value).subscribe(() => {
        this.router.navigate(['../list']);
      });
    }
  }
  ngOnInit(): void {
    this.addNewForm = new FormGroup({
      date: new FormControl<Date | null>(null),
      hours: new FormControl(''),
      message: new FormControl(''),
      done: new FormControl<boolean>(false),
      creator: new FormControl(localStorage.getItem('username')),
    });
  }
}
