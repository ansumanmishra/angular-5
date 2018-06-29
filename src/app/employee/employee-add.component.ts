import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

	public empList: Array<object> = [];
	public emp: object = {};

  constructor() { }

  ngOnInit() {
  }

  saveEmployee(empFormData) {
  	this.empList.push(empFormData.value);
  	this.emp = {};
  }

}
