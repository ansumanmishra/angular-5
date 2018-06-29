import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	public usersList:any;
	public userInfo:any;
	public error:String;
	
	@Input() title:String;
	@Output() msg = new EventEmitter();

  constructor(private _usersService: UsersService) { }

  ngOnInit() {  
  	//this.usersList = this._usersService.getUsers();
  	this._usersService.getUsersList()
  		.subscribe( data => this.usersList = data['results'], 
  				err => this.error = err);
  }

  showUserDetails(username, e) {  	
  	let user = this.usersList.filter( user => {
  		return user.login.username === username;
  	});

  	this.userInfo = user[0];

  	this.msg.emit('User clicked')
  }

}
