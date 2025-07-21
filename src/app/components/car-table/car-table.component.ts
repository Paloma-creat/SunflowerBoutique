import { Component, inject, Input } from '@angular/core';
import { RoupasService } from '../../service/dashboard.service';


@Component({
  selector: 'app-car-table',
  imports: [],
  templateUrl: './car-table.component.html',
  styleUrl: './car-table.component.css'
})
export class CarTableComponent {
  @Input()Codigos: string[] | undefined; 
  @Input() CarrinhosAbandonados: number = 0
  @Input() NivelDeSatisfação: number = 0
  @Input() Pedidos: number  = 0
  @Input() Afiliados: number = 0
  @Input() ClienteFidelizados: number = 0

  dashboardService = inject(RoupasService)
N: any;
ClienteFidelizado: any;
NivelDeSatisfa: any;
NivelDeSatisfac: any;
NivelDeSatisfacao: any;
  RoupasService: any;

  onChangeVin(event: Event ){
    const vin = (event.target as HTMLInputElement).value
    this.RoupasService.RoupasService(vin).subscribe({
      error:() => {},
      next: (vinInfos: { CarrinhosAbandonados: number; NivelDeSatisfação: number; Pedidos: string; Afiliados: number; ClienteFidelizados: number; }) => {
        this.CarrinhosAbandonados=vinInfos.CarrinhosAbandonados
        this.NivelDeSatisfação=vinInfos.NivelDeSatisfação
        this.Pedidos=vinInfos.Pedidos
        this.Afiliados=vinInfos.Afiliados
        this.ClienteFidelizados=vinInfos.ClienteFidelizados
      }

    })
  }
}
