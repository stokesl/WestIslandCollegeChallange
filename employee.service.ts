import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private employeesUrl = 'https://campusconnect.mywic.ca/api/test/studenttest';

  getEmployees(): Observable<Employee[]> {
  	return this.http.get<Employee[]>(this.employeesUrl).pipe(catchError(this.handleError('getEmployees', [])));
  }

  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); // log to console instead
    return of(result as T);
  };
}

}
