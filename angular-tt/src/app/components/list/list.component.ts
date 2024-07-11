import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  constructor(private http: HttpService) {}

  term: string = ''
  adminToken = localStorage.getItem('token') === '123456790qwerty' ? true : false
  $tasks = this.http.getAllTasks()
    

  ngOnInit(): void {
    console.log(this.adminToken);
  }
}
