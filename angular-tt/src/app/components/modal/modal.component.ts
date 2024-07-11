import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router) {}
  @Input() state: string
  @Input() id: string

  modalAnswer(answer: string){
    if(answer === 'yes'){
      this.http.deleteTask(this.id).subscribe()
    }
    this.state = 'hidden'
    console.log(this.state);
    this.router.navigate(['../list'])
  }
}
