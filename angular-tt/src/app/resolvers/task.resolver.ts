import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Observable } from 'rxjs';
import { ITask } from '../models/task';

export const taskResolver: ResolveFn<Observable<ITask>> = (route, state) => {
  const taskId = route.params['id']
  return inject(HttpService).getSingleTask(taskId)
};
