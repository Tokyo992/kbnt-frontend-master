import { Pipe, PipeTransform } from '@angular/core';
import { Tasks } from './class/Tasks';

@Pipe({ name: 'taskFilter'})

export class TaskFilterPipe implements PipeTransform {
  transform(tasks: Tasks[], searchBox: string): Tasks[] {
    if (!tasks || !searchBox) {
      return tasks;
    }
    return tasks.filter(task =>
      task.title.toLowerCase().indexOf(searchBox.toLowerCase()) !== -1);
  }
  
}
