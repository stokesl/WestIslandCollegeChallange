import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  //Link to api
  private employeesUrl = 'https://campusconnect.mywic.ca/api/test/studenttest';

  //Gets data from api
  getEmployees(): Observable<Employee[]> {
  	return this.http.get<Employee[]>(this.employeesUrl).pipe(catchError(this.handleError('getEmployees', [])));
  }

  //Error handling
  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); // log to console instead
    return of(result as T);
  };
}

}
