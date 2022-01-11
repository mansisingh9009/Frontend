import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseURL ="http://localhost:9090/payment";

  constructor(private httpClient: HttpClient) { }

  getPaymentList(payment:Payment):Observable<object>{
    return this.httpClient.get(this.baseURL + '/get');
  }

  addPaymentList(payment:Payment):Observable<object>{
    console.log(payment);
    return this.httpClient.post(this.baseURL+'/add',payment);
  }
}
