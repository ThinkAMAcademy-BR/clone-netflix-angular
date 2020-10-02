import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuOpened = false;

  listTitles = [{
    trailer: '/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: '/assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia',
    relevance: 98,
    age: 0,
    parts: 4,
    categories: [
      'Épico',
      'Filme de fantasia',
      'Viagem no espaço'
    ]
  },
  {
    trailer: '/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: '/assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 2',
    relevance: 90,
    age: 12,
    parts: 4,
    categories: [
      'Épico',
      'Filme de fantasia',
      'Viagem no espaço'
    ]
  },
  {
    trailer: '/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: '/assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 3',
    relevance: 86,
    age: 14,
    parts: 4,
    categories: [
      'Épico',
      'Filme de fantasia',
      'Viagem no espaço'
    ]
  },
  {
    trailer: '/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: '/assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 4',
    relevance: 80,
    age: 18,
    parts: 4,
    categories: [
      'Épico',
      'Filme de fantasia',
      'Viagem no espaço'
    ]
  }];

  setMenuState(state: boolean): void {
    this.menuOpened = state;
  }

  closeMenu(): void {
    this.menuOpened = false;
  }
}
