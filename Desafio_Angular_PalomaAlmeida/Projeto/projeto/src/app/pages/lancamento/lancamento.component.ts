import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";

interface Produto {
  image: string;
  nome: string;
  preco: string;
  obs: string;
  link: string;
}

@Component({
  selector: 'app-lancamento',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent {
  produtos: Produto[] = [
    {
      image: 'img/Vestido Ester.jpeg',
      nome: 'Vestido Ester',
      preco: 'R$ 60,00',
      obs: 'Tecido em Poliéster',
      link: 'https://www.instagram.com/boutique.sunfllower'
    },
    {
      image: 'img/Body manga unica.jpeg',
      nome: 'Body Manga Única',
      preco: 'R$ 45,00',
      obs: 'Tecido em Malha Fria',
      link: 'https://www.instagram.com/boutique.sunfllower'
    },
    {
      image: 'img/Vestido Marilia.jpeg',
      nome: 'Vestido Marilia',
      preco: 'R$ 65,00',
      obs: 'Tecido em Poliéster',
      link: 'https://www.instagram.com/boutique.sunfllower'
    },
    {
      image: 'img/geometrico midi.jpeg',
      nome: 'Vestido Geometrico',
      preco: 'R$ 120,00',
      obs: 'Tecido em Poliéster',
      link: 'https://www.instagram.com/boutique.sunfllower'
    },
    {
      image: 'img/floral midi.jpeg',
      nome: 'Vestido Floral',
      preco: 'R$ 120,00',
      obs: 'Tecido em Poliéster',
      link: 'https://www.instagram.com/boutique.sunfllower'
    },
    {
      image: 'img/Macacão.jpeg',
      nome: 'Vestido Geometrico',
      preco: 'R$ 110,00',
      obs: 'Tecido em Alfaiataria',
      link: 'https://www.instagram.com/boutique.sunfllower'
    }
  ];
}

