import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoupaService {
  private api = 'http://localhost:3001/';

  constructor(private http: HttpClient) {}

  getRoupas(): Observable<any> {
    return this.http.get("http://localhost:3001/roupas");
  }

  getEstoque(id: number): Observable<any> {
    return this.http.post<any>("http://localhost:3001/estoque", { id });
  }
}
