import { Component, OnInit } from '@angular/core';

import { EmployeeModel } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

	empList: EmployeeModel[] = [];
	public emp: object = {};
  error;

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this._employeeService.getEmployees()
      .subscribe( 
        (data) => this.empList = data, // success path
        (error) => this.error = error // error path
    );
  }

  saveEmployee(empFormData) {
    if(this.emp.id) {
      this._employeeService.editEmployee(this.emp).subscribe( 
        (data) => {
          if(data.msg) {
            alert(data.msg);
            this.getEmployees();
          }
      },
      (error) => this.error = error
      );
    }
    else {
      this._employeeService.saveEmployee(empFormData.value)
      .subscribe( 
        (data) => {
        if(data.msg) {
          alert(data.msg);
          this.getEmployees();
        }
      },
      (error) => this.error = error
      );
    }
    
  	//this.empList.push(empFormData.value);
  	this.emp = {};
  }

  editEmployee(emp) {
    this.emp = emp;
  }

  deleteEmployee(empID) {
    const toDelete = confirm('Are you sure, you want to delete this?');

    if(!toDelete) {
      return;
    }

    this._employeeService.deleteEmployee(empID).subscribe( 
      (data) => {
        if(data.msg) {
          alert(data.msg);
          this.getEmployees();
        }
    },
    (error) => this.error = error
    );
  }
}
