import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public tasks: string[] = [];

  addTask(task: string) {
    task ? this.tasks.push(task) : alert('Please enter the text of task');
  }
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
