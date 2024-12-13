import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.scss',
})
export class AppNavbarComponent {
  currentRoute: string = '/'; // Define a rota inicial como "/"

  constructor(private router: Router) {
    this.currentRoute = this.router.url; // Atualiza a rota com a atual ao carregar
  }

  setActive(route: string): void {
    this.currentRoute = route;
  }
}
