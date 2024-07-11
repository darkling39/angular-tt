import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../models/task';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: ITask[], search: string): ITask[] {
    return tasks.filter((item) =>
      item.message.toLowerCase().includes(search.toLowerCase())
    );
  }

}
