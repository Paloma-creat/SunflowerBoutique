import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoupaService {
  private api = 'https://api-hc6z.onrender.com/';

  constructor(private http: HttpClient) {}

  getRoupas(): Observable<any> {
    return this.http.get("https://api-hc6z.onrender.com/roupas");
  }

  getEstoque(id: number): Observable<any> {
    return this.http.post<any>("https://api-hc6z.onrender.com/estoque", { id });
  }
}
