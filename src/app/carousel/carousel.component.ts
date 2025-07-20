import { Component } from "@angular/core";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  standalone: true
})
export class CarouselComponent {
  imageList = [
    {
      image: './img/Midi Floral.jpeg',
      title: 'Vestido Midi Floral',
      url: '/lancamento'
    },
    {
      image: '/img/Macacão.jpeg',
      title: 'Macacão Clássico',
      url: '/lancamento'
    },
    {
      image: '/img/Midi Geografico.jpeg',
      title: 'Midi Geográfico',
      url: '/lancamento'
    }
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.imageList.length;
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.imageList.length) % this.imageList.length;
  }
}
