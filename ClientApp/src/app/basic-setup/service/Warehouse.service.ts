import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Warehouse } from '../models/Warehouse';
import {IWarehousePagination, WarehousePagination } from '../models/WarehousePagination';
import { SelectedModel } from 'src/app/core/models/selectedModel';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  baseUrl = environment.securityUrl;
  Warehouses: Warehouse[] = [];
  WarehousePagination = new WarehousePagination();
  constructor(private http: HttpClient) { }

  getWarehouses(pageNumber, pageSize,searchText) {

    let params = new HttpParams();

    params = params.append('searchText', searchText.toString());
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return this.http.get<IWarehousePagination>(this.baseUrl + '/Warehouse/get-Warehouses', { observe: 'response', params })
    .pipe(
      map(response => {
        this.Warehouses = [...this.Warehouses, ...response.body.items];
        this.WarehousePagination = response.body;
        return this.WarehousePagination;
      })
    );
  }

  getWarehouseForMenu(pageNumber, pageSize,searchText) {

    let params = new HttpParams();

    params = params.append('searchText', searchText.toString());
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return this.http.get<IWarehousePagination>(this.baseUrl + '/Warehouse/get-WarehouseForMenu', { observe: 'response', params })
    .pipe(
      map(response => {
        this.Warehouses = [...this.Warehouses, ...response.body.items];
        this.WarehousePagination = response.body;
        return this.WarehousePagination;
      })
    );
  }


  getWarehouseListByWarehouseId(pageNumber, pageSize,searchText,warehouseId) {

    let params = new HttpParams();

    params = params.append('searchText', searchText.toString());
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    params = params.append('warehouseId', warehouseId.toString());
    return this.http.get<IWarehousePagination>(this.baseUrl + '/Warehouse/get-WarehouseListByWarehouseId', { observe: 'response', params })
    .pipe(
      map(response => {
        this.Warehouses = [...this.Warehouses, ...response.body.items];
        this.WarehousePagination = response.body;
        return this.WarehousePagination;
      })
    );
  }
  
}
