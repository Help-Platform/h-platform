import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../shared/users';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Items } from '../models/items.model';


@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  // Define API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // HttpClient API get() method => Fetch employees list
  getAllItems(): Observable<Users> {
    return this.http.get<Users>(this.apiURL + '/users')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API get() method => Fetch employee
  getItem(id): Observable<Users> {
    return this.http.get<Users>(this.apiURL + '/users/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API post() method => Create employee
  createItems(): Observable<Items> {
    return this.http.post<Items>(this.apiURL + '/users', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API put() method => Update employee
  updateUser(id, user): Observable<Users> {
    return this.http.put<Users>(this.apiURL + '/users/' + id, JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API delete() method => Delete employee
  deleteUser(id){
    return this.http.delete<Users>(this.apiURL + '/user/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Error handling
  handleError(error) {
     let errorMessage = '';
     if (error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }
}
