import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  constructor(private http: HttpService, private route:ActivatedRoute) {}
  
  adminToken = localStorage.getItem('username') === 'admin'? true : false
  term: string = ''
  $tasks = this.http.getAllTasks().pipe(map(list => {
    if(localStorage.getItem('username') === 'admin'){
      return list
    }
    return list.filter(item => item.creator === localStorage.getItem('username'))
  }))

  ngOnInit(): void {
  }
}
