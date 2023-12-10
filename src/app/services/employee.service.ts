import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8081/api/v1/employees"

  constructor(private http: HttpClient) { }

  createEmployee(employee: Employee): Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<Employee>(this.baseUrl,employee, httpOptions);
  }

  getAllEmployees(): Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.get<Employee>(this.baseUrl, httpOptions)
  }

  
}
