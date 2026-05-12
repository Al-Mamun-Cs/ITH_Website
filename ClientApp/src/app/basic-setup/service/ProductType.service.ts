import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductType } from '../models/ProductType';
import {IProductTypePagination, ProductTypePagination } from '../models/ProductTypePagination';
import { SelectedModel } from 'src/app/core/models/selectedModel';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  baseUrl = environment.securityUrl;
  ProductTypes: ProductType[] = [];
  ProductTypePagination = new ProductTypePagination();
  constructor(private http: HttpClient) { }

  getProductTypes(pageNumber, pageSize,searchText,warehouseId) {

    let params = new HttpParams();

    params = params.append('searchText', searchText.toString());
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    params = params.append('warehouseId', warehouseId.toString());
    return this.http.get<IProductTypePagination>(this.baseUrl + '/ProductType/get-ProductTypeListByWarehouseId', { observe: 'response', params })
    .pipe(
      map(response => {
        this.ProductTypes = [...this.ProductTypes, ...response.body.items];
        this.ProductTypePagination = response.body;
        return this.ProductTypePagination;
      })
    );
  }

  

}
