import { Component, OnInit } from '@angular/core';
import { RoupaService } from '../../service/dashboard.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule], 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
goToLoja() {
  this.router.navigate(['/homeprincipal']); // Exemplo de navegação Angular
throw new Error('Method not implemented.');
}
logoToLoja() {
throw new Error('Method not implemented.');
}
roupas: any[] = [];
  totalRoupas: number = 0;
  roupaSelecionada: any = null;

  constructor(
    private roupaService: RoupaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.roupaService.getRoupas().subscribe((dados) => {
      this.roupas = dados;
      this.totalRoupas = dados.length;
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  
  logout() {
    localStorage.clear(); // se usar tokens
    this.router.navigate(['/login']);
  }

  verEstoque(id: number) {
    this.roupaService.getEstoque(id).subscribe((estoque) => {
      this.roupaSelecionada = estoque;
    });
  }

  fecharDetalhes() {
    this.roupaSelecionada = null;
  }
}
