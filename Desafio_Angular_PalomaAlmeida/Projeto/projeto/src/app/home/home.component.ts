import { Component, inject } from '@angular/core';
import { MenuComponent } from "../components/menu/menu.component";
import { BoasVindasComponent } from "../components/boas-vindas/boas-vindas.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MenuComponent, BoasVindasComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  router = inject(Router);

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']); 
  }
}
