import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './task';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseurl = environment.baseUrl + 'api/tasks/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // GET
  GetAll(): Observable<Task> {
    return this.http
      .get<Task>(this.baseurl)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  GetAllByProject(projectId): Observable<Task> {
    return this.http
      .get<Task>(environment.baseUrl + "api/projects/" + projectId + "/tasks")
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetById(id): Observable<Task> {
    return this.http
      .get<Task>(this.baseurl + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // POST
  Add(data): Observable<Task> {
    return this.http
      .post<Task>(this.baseurl, JSON.stringify(data), this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // PUT
  Update(id, data): Observable<Task> {
    return this.http
      .post<Task>(this.baseurl + id, JSON.stringify(data), this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // DELETE
  Delete(id){
    return this.http
      .delete<Task>(this.baseurl + id, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
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
