import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Management } from '../models/Management';
import { IManagementPagination, ManagementPagination } from '../models/ManagementPagination';
import { SelectedModel } from 'src/app/core/models/selectedModel';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  baseUrl = environment.securityUrl;
  Managements: Management[] = [];
  ManagementPagination = new ManagementPagination();
  constructor(private http: HttpClient) { }

  getManagements(pageNumber, pageSize,searchText) {

    let params = new HttpParams();

    params = params.append('searchText', searchText.toString());
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return this.http.get<IManagementPagination>(this.baseUrl + '/Management/get-Managements', { observe: 'response', params })
    .pipe(
      map(response => {
        this.Managements = [...this.Managements, ...response.body.items];
        this.ManagementPagination = response.body;
        return this.ManagementPagination;
      })
    );
  }

  
  
  
}
