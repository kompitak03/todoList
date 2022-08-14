import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To do list';
  todoList: string[] = [];
  doneList: string[] = [];

  constructor() {
    let todoList = localStorage.getItem('todoList');
    let doneList = localStorage.getItem('doneList');

    if (todoList) {
      if (JSON.parse(todoList) instanceof Array) {
        this.todoList = JSON.parse(todoList);
      }
    }

    if (doneList) {
      if (JSON.parse(doneList) instanceof Array) {
        this.doneList = JSON.parse(doneList);
      }
    }

  }

  addTodoList(todo: string) {
    todo = todo.trim();
    if (todo && todo.length === 0) return;
    this.todoList.push(todo);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  addDoneList(index: number) {
    this.doneList.push(this.todoList[index]);
    this.todoList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
    localStorage.setItem('doneList', JSON.stringify(this.doneList));
  }

  removeDoneList(index: number) {
    this.todoList.push(this.doneList[index]);
    this.doneList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
    localStorage.setItem('doneList', JSON.stringify(this.doneList));
  }

}
