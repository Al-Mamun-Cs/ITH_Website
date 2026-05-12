import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Supplier } from '../models/Supplier';
import {ISupplierPagination, SupplierPagination } from '../models/SupplierPagination';
import { SelectedModel } from 'src/app/core/models/selectedModel';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  baseUrl = environment.securityUrl;
  Suppliers: Supplier[] = [];
  SupplierPagination = new SupplierPagination();
  constructor(private http: HttpClient) { }

  getSuppliers(pageNumber, pageSize,searchText) {

    let params = new HttpParams();

    params = params.append('searchText', searchText.toString());
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return this.http.get<ISupplierPagination>(this.baseUrl + '/Supplier/get-suppliers', { observe: 'response', params })
    .pipe(
      map(response => {
        this.Suppliers = [...this.Suppliers, ...response.body.items];
        this.SupplierPagination = response.body;
        return this.SupplierPagination;
      })
    );
  }
  
}
