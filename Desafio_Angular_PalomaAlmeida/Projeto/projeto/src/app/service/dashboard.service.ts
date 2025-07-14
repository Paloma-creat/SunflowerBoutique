import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo, VinInfos } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:3001';

  // GET /veiculos
  getVeiculos(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>("http://localhost:3001/vehicles");
  }

  // GET /vin/:codigo
  getVinInfos(vin:string){
    return this.http.post<VinInfos>("http://localhost:3001/vehicleData",{vin})
  }
}
