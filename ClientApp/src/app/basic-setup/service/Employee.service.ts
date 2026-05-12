import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/Employee';
import {IEmployeePagination, EmployeePagination } from '../models/EmployeePagination';
import { SelectedModel } from 'src/app/core/models/selectedModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = environment.securityUrl;
  Employees: Employee[] = [];
  EmployeePagination = new EmployeePagination();
  constructor(private http: HttpClient) { }

  getEmployees(pageNumber, pageSize,searchText) {

    let params = new HttpParams();

    params = params.append('searchText', searchText.toString());
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return this.http.get<IEmployeePagination>(this.baseUrl + '/Empolyee/get-empolyees', { observe: 'response', params })
    .pipe(
      map(response => {
        this.Employees = [...this.Employees, ...response.body.items];
        this.EmployeePagination = response.body;
        return this.EmployeePagination;
      })
    );
  }

  

  

}
