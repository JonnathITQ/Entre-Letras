import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen = false;

  navItems = [
    { label: 'Inicio', link: '/', icon: 'fas fa-home' },
    { label: 'Libros', link: '/libros', icon: 'fas fa-book' },
    { label: 'Mi Estante', link: '/estante', icon: 'fas fa-bookmark' },
    { label: 'Categorías', link: '/temas', icon: 'fas fa-tags' },
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    // close only on mobile interactions — safe to call always
    this.menuOpen = false;
  }
}
