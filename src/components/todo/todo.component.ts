import { Component } from "@angular/core";
import * as uuid from 'uuid';

import { Todo } from "src/types/todo";
import { TodoItem } from "./todoItem";
import { Model } from "src/app/model";



@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent{
  private model = new Model();
  displayAll: boolean = true;
  todoText: string = ""
  constructor() {}


  getName() {
    return this.model.name
  }

  getItems() {
    if(!this.displayAll) {
      return this.model.items.filter(item => !item.action)
    }
    return this.model.items
  }

  addItem() {
    if(this.todoText) {
      this.model.items.push({id: uuid.v4(), description: this.todoText, action: false});
      this.todoText = ''
    }
  }

  complatedTask() {
    return this.model.items.filter(item => item.action).length;
  }

  getBtnClasses() {
    return {
      'disabled': this.todoText.length == 0,
      'btn-secondary': this.todoText.length == 0,
      'btn-outline-primary': this.todoText.length > 0
    }
  }

}
