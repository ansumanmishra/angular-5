import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient : HttpClient) { }

  handleError(error: HttpErrorResponse) {
	if (error.error instanceof ErrorEvent) {
	    // A client-side or network error occurred. Handle it accordingly.
	    console.error('An error occurred:', error.error.message);
	  } else {
	    // The backend returned an unsuccessful response code.
	    // The response body may contain clues as to what went wrong,
	    console.error(
	      `Backend returned code ${error.status}, ` +
	      `body was: ${error.error}`);
	  }
	  // return an observable with a user-facing error message
	  return throwError(
	    'Something bad happened; please try again later.');
	}

  getEmployees() {
  	return this.httpClient.get('http://localhost:3000/getEmployess').pipe(catchError(this.handleError));
  }

  saveEmployee(empDetail) {
  	return this.httpClient.post('http://localhost:3000/addEmployee', empDetail).pipe(catchError(this.handleError));
  }

  editEmployee(empDetail) {
  	return this.httpClient.put('http://localhost:3000/addEmployee', empDetail).pipe(catchError(this.handleError));
  }

  deleteEmployee(empID) {
  	return this.httpClient.delete(`http://localhost:3000/deleteEmployee/${empID}`).pipe(catchError(this.handleError));
  }
}
