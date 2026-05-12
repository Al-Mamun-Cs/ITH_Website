import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TvcVideo } from '../models/TvcVideo';
import { ITvcVideoPagination, TvcVideoPagination } from '../models/TvcVideoPagination';
import { SelectedModel } from 'src/app/core/models/selectedModel';

@Injectable({
  providedIn: 'root'
})
export class TvcVideoService {

  baseUrl = environment.securityUrl;
  TvcVideos: TvcVideo[] = [];
  TvcVideoPagination = new TvcVideoPagination();
  constructor(private http: HttpClient) { }

  getTvcVideos(pageNumber, pageSize,searchText) {

    let params = new HttpParams();

    params = params.append('searchText', searchText.toString());
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return this.http.get<ITvcVideoPagination>(this.baseUrl + '/TvcVideo/get-TvcVideos', { observe: 'response', params })
    .pipe(
      map(response => {
        this.TvcVideos = [...this.TvcVideos, ...response.body.items];
        this.TvcVideoPagination = response.body;
        return this.TvcVideoPagination;
      })
    );
  }
  
  
}
