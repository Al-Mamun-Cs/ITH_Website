import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EasyBikeType } from '../models/EasyBikeType';
import {IEasyBikeTypePagination, EasyBikeTypePagination } from '../models/EasyBikeTypePagination';
import { SelectedModel } from 'src/app/core/models/selectedModel';

@Injectable({
  providedIn: 'root'
})
export class EasyBikeTypeService {

  baseUrl = environment.securityUrl;
  EasyBikeTypes: EasyBikeType[] = [];
  EasyBikeTypePagination = new EasyBikeTypePagination();
  constructor(private http: HttpClient) { }

  getEasyBikeTypes(pageNumber, pageSize,searchText) {

    let params = new HttpParams();

    params = params.append('searchText', searchText.toString());
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return this.http.get<IEasyBikeTypePagination>(this.baseUrl + '/EasyBikeType/get-EasyBikeTypes', { observe: 'response', params })
    .pipe(
      map(response => {
        this.EasyBikeTypes = [...this.EasyBikeTypes, ...response.body.items];
        this.EasyBikeTypePagination = response.body;
        return this.EasyBikeTypePagination;
      })
    );
  }

  getSelectedCategory(){
    return this.http.get<any>(this.baseUrl + '/EasyBikeType/get-selectedCategory')
  }
  
}
