import { Component, OnInit } from '@angular/core';

import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

	todos = null;
	todo = null;
	addMore = false;
	todoChk = false;
	completedTodos:any[];
	pendingTodos:any[];

  constructor(private TodoService: TodoService) { }

  ngOnInit() {
  	this.todos = this.TodoService.todos;

  	this.getCompletedItems();
  	this.getPendingItems();
  }

  getCompletedItems() {
  	this.completedTodos = this.todos.filter( (item) => {
  		return item.status === 'Completed';
  	})
  }

  getPendingItems() {
  	this.pendingTodos = this.todos.filter( (item) => {
  		return item.status === 'Pending';
  	})  	
  }

  addMoreTodo() {
  	this.addMore = !this.addMore;
  }

  addTodo() {
  	this.TodoService.todos.push({
  		desc: this.todo,
  		status: 'Pending'
  	});

  	this.todo = null;
  	this.addMore = false;
  	this.getPendingItems();
  }

  deleteTodo(todo) {
  	let confirmDel = confirm('Are you sure, you want to delete this?');

  	if(!confirmDel) {
  		return false;
  	}

  	let index = this.todos.indexOf(todo);
	if (index > -1) {
	  this.todos.splice(index, 1);
	}
  	this.getCompletedItems();
  	this.getPendingItems();
  }

  updateTodoStatus(todo, event) {
  	this.todos = this.todos.filter( (item) => {
  		return (todo.desc === item.desc) ? item.status = 'Completed' : 'Pending';
  	});
  	
  	this.getCompletedItems();
  	this.getPendingItems();
  }

}
