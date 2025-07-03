import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalle-personaje-transformaciones',
  templateUrl: './detalle-personaje-transformaciones.component.html',
  styleUrls: ['./detalle-personaje-transformaciones.component.css']
})
export class DetallePersonajeTransformacionesComponent implements OnInit {
  nombrePersonaje: string = '';
  transformaciones: any[] = [];

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient, 
    private router: Router) { }

  ngOnInit(): void {
    // Obtener el nombre del personaje desde la URL
    this.nombrePersonaje = this.route.snapshot.paramMap.get('name') || '';
    this.cargarTransformaciones();
  }

  cargarTransformaciones(): void {
    const apiUrl = 'https://dragonball-api.com/api/transformations';
    this.http.get<any[]>(apiUrl).subscribe((response) => {
      // Filtrar las transformaciones que contienen el nombre del personaje
      this.transformaciones = response.filter((transformacion) =>
        transformacion.name.includes(this.nombrePersonaje)
      );
    });
  }

  volverAlListado(): void {
    this.router.navigate(['/personajes']);
  }
}
