import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-homeprincipal',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, HeaderComponent],
  templateUrl: './homeprincipal.component.html',
  styleUrls: ['./homeprincipal.component.css']
})
export class HomePrincipalComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  autoplayInterval: any;

  imageList = [
    {
      image: 'img/Macacão.jpeg',
      title: 'Macacão Clássico'
    },
    {
      image: 'img/floral midi.jpeg',
      title: 'Vestido Midi Floral'
    },
    {
      image: 'img/geometrico midi.jpeg',
      title: 'Midi Geográfico'
    }
  ];

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.imageList.length;
    this.resetAutoplay();
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.imageList.length) % this.imageList.length;
    this.resetAutoplay();
  }

  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imageList.length;
    }, 3000); // troca a cada 3 segundos
  }

  stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  resetAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }
}
