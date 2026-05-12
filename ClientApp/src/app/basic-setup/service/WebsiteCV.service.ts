import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WebsiteCV } from '../models/WebsiteCV';
import { IWebsiteCVPagination, WebsiteCVPagination } from '../models/WebsiteCVPagination';
import { SelectedModel } from 'src/app/core/models/selectedModel';

@Injectable({
  providedIn: 'root'
})
export class WebsiteCVService {

  baseUrl = environment.securityUrl;
  WebsiteCVs: WebsiteCV[] = [];
  BWebsiteCVPagination = new WebsiteCVPagination();
  constructor(private http: HttpClient) { }

  submit(model: any) {
    return this.http.post(this.baseUrl + '/WebsiteCV/save-WebsiteCV', model);
  }
  
  
}
