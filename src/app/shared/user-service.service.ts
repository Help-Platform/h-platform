import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../shared/users';
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  [x: string]: any;

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
  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiURL + '/users')
    .pipe(
      retry(1),
      tap (_ => console.log('fetched Users')),
      catchError(this.handleError<Users[]>('getAllUsers', [] ))
    );
  }

  // HttpClient API get() method => Fetch employee
  getUser(id): Observable<Users> {
    return this.http.get<Users>(this.apiURL + '/users/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API post() method => Create employee
  createUser(user): Observable<Users> {
    return this.http.post<Users>(this.apiURL + '/users', JSON.stringify(user), this.httpOptions)
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

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
