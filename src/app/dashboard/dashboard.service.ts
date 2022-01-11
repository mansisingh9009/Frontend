import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from './dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseURL = "http://localhost:8085/department";

  constructor(private httpClient: HttpClient) { }

  getDeptList(): Observable<any> {
    return this.httpClient.get(this.baseURL + '/findAll');
  }

  addDeptList(dashboard: Dashboard) {
    console.log(dashboard + " see me ");
    return this.httpClient.post<any>(this.baseURL + '/add', dashboard);
  }

}
