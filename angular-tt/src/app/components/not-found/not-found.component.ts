import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  animations: [
    trigger('hiddenState', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('500ms 500ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class NotFoundComponent {
  state = 'hidden';
}
