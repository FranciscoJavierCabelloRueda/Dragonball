import { Component, OnInit } from '@angular/core';
import { AuthService } from './crud/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '29a-dragonball-menu CRUD: observables + IndexedDB + httpClient + Filtros (arreglados) + Routing + API PYTHON + Token MySQL + MENÚ';

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.loadSession();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


}
