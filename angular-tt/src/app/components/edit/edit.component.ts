import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ITask } from 'src/app/models/task';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  constructor(private route:ActivatedRoute, public http: HttpService, private router:Router){}

  state: string = 'hidden'
  editForm!: FormGroup
  id: string = this.route.snapshot.params['id']
  $task: Observable<ITask> = this.route.data.pipe(map(data => data['task']))


  submitForm(){
    if(this.editForm.value){
      this.http.postTask(this.editForm.value).subscribe((data) => {
        console.log(data);
        this.http.deleteTask(this.id).subscribe()
        this.router.navigate(['../list'])
      })
    }
  }

  showModal(){
    this.state = 'visible'
  }

  ngOnInit(): void {
    
    this.editForm = new FormGroup({
      date: new FormControl<Date | null>(null),
      hours: new FormControl(''),
      message: new FormControl(''),
      done: new FormControl<boolean>(false)
    })

    this.$task.subscribe((data:ITask) => {
      this.editForm.patchValue({
        date: data.date,
        hours: data.hours,
        message: data.message,
        done: data.done
      })
    })
  }
}
