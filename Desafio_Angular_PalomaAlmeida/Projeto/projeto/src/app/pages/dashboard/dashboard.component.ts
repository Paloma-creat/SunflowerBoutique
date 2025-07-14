import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from "../../component/card/card.component";
import { DashboardService } from '../../service/dashboard.service';
import { Veiculo, VinInfos } from '../../models/car';
import { CarTableComponent } from "../../components/car-table/car-table.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CardComponent, CarTableComponent, RouterModule]
})
export class DashboardComponent implements OnInit {
  dashboardService = inject(DashboardService);
  router = inject(Router);

  veiculos: Veiculo[] = [];

  veiculoSelecionado: Veiculo = {
    id: -1,
    connected: 0,
    softwareUpdates: 0,
    volumetotal: 0,
    img: "",
    vin: "",
    vehicle: ""
  };

  vinInfos: VinInfos = {
    id: -1,
    lat: 0,
    long: 0,
    nivelCombustivel: 0,
    odometro: 0,
    status: ""
  };

  ngOnInit() {
    this.dashboardService.getVeiculos().subscribe({
      error: () => {},
      next: (veiculos) => {
        this.veiculos = Object.values(veiculos) as Veiculo[];
        this.veiculoSelecionado = this.veiculos[0];

        this.dashboardService.getVinInfos(this.veiculoSelecionado.vin).subscribe({
          error: () => {},
          next: (vinInfos) => {
            this.vinInfos = vinInfos;
          }
        });
      }
    });
  }

  onChangeSelect(event: Event) {
    const id = Number((event.target as HTMLSelectElement).value);
    const veiculo = this.veiculos.find((v) => v.id === id);
    if (veiculo) {
      this.veiculoSelecionado = veiculo;
    }

    this.dashboardService.getVinInfos(this.veiculoSelecionado.vin).subscribe({
      error: () => {},
      next: (vinInfos) => {
        this.vinInfos = vinInfos;
      }
    });
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
} 
