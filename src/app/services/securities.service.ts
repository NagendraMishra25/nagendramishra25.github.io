import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Security } from '../models/Security';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SecuritiesService {
  securitiesUrl: string = 'http://rtq.chicheongweng.com:3000/securities ';

  constructor(private http: HttpClient) { }

  // Get Todos
  getSecurities(): Observable<Security[]> {
    return this.http.get<Security[]>(`${this.securitiesUrl}`);
  }
 
}
