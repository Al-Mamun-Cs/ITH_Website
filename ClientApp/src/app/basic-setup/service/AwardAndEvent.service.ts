import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AwardAndEvent } from '../models/AwardAndEvent';
import { IAwardAndEventPagination, AwardAndEventPagination } from '../models/AwardAndEventPagination';
import { SelectedModel } from 'src/app/core/models/selectedModel';

@Injectable({
  providedIn: 'root'
})
export class AwardAndEventService {

  baseUrl = environment.securityUrl;
  AwardAndEvents: AwardAndEvent[] = [];
  AwardAndEventPagination = new AwardAndEventPagination();
  constructor(private http: HttpClient) { }

  getAwardAndEvents(pageNumber, pageSize,searchText) {

    let params = new HttpParams();

    params = params.append('searchText', searchText.toString());
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return this.http.get<IAwardAndEventPagination>(this.baseUrl + '/AwardAndEvent/get-AwardAndEvents', { observe: 'response', params })
    .pipe(
      map(response => {
        this.AwardAndEvents = [...this.AwardAndEvents, ...response.body.items];
        this.AwardAndEventPagination = response.body;
        return this.AwardAndEventPagination;
      })
    );
  }

  getEvents(pageNumber, pageSize,searchText) {

    let params = new HttpParams();

    params = params.append('searchText', searchText.toString());
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return this.http.get<IAwardAndEventPagination>(this.baseUrl + '/AwardAndEvent/get-Events', { observe: 'response', params })
    .pipe(
      map(response => {
        this.AwardAndEvents = [...this.AwardAndEvents, ...response.body.items];
        this.AwardAndEventPagination = response.body;
        return this.AwardAndEventPagination;
      })
    );
  }

  getPressAds(pageNumber, pageSize,searchText) {

    let params = new HttpParams();

    params = params.append('searchText', searchText.toString());
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return this.http.get<IAwardAndEventPagination>(this.baseUrl + '/AwardAndEvent/get-PressAd', { observe: 'response', params })
    .pipe(
      map(response => {
        this.AwardAndEvents = [...this.AwardAndEvents, ...response.body.items];
        this.AwardAndEventPagination = response.body;
        return this.AwardAndEventPagination;
      })
    );
  }
  
  
}
