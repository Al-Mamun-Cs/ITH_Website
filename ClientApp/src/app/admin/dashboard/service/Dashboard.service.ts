import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { SelectedModel } from "src/app/core/models/selectedModel";
import { map } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class DashboardService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  
  
}
