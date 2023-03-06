import { Injectable } from '@angular/core';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Quota } from '../interfaces/quota';
import { QuotaType } from '../interfaces/quota-type';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public getQuotas(): Observable<QuotaType[]> {
    return this.http.get<QuotaType[]>('http://localhost:3000/cotas');
  }

  public getQuotaById(tag: string): Observable<Quota[]> {
    return this.http.get<Quota[]>('http://localhost:3000/cota/'+tag);
  }
}
