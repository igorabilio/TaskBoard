import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = environment.baseUrl + 'api/users/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // GET
  GetAll(): Observable<User> {
    return this.http
      .get<User>(this.baseurl)
      .pipe(retry(1), catchError(this.errorHandl)
    )
  }

  // GET
  GetById(id): Observable<User> {
    return this.http
      .get<User>(this.baseurl + id)
      .pipe(retry(1), catchError(this.errorHandl)
    )
  }

  // POST
  Add(data): Observable<User> {
    return this.http
      .put<User>(this.baseurl, JSON.stringify(data), this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl))
  }

  // PUT
  Update(id, data): Observable<User> {
    return this.http
      .post<User>(this.baseurl + id, JSON.stringify(data), this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl)) 
  }

  // DELETE
  Delete(id){
    return this.http
      .delete<User>(this.baseurl + id, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl))
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
