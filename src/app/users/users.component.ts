import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	public usersList:any;

  constructor(private _usersService: UsersService) { }

  ngOnInit() {  
  	//this.usersList = this._usersService.getUsers();
  	this._usersService.getUsersList().subscribe( data => this.usersList = data['results']);
  };
  }

}
