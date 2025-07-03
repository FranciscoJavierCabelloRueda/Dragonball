import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../Interfaces/personaje';
import { ComunicaComponentePersonajeService } from '../../servicios/personaje/comunica-componente-personaje.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pagina-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.css']
})
export class PaginaDetallePersonajeComponent implements OnInit {
  public personaje: Personaje = {};

  constructor(
    private servicioComunicaPersonaje: ComunicaComponentePersonajeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  private subscription: Subscription = new Subscription();
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
    if (!isNaN(id)) {
      this.subscription = this.servicioComunicaPersonaje.personajes$.subscribe((personajes) => {
        const encontrado = personajes.find((personaje) => personaje.id == id);
        if (encontrado) {
          this.personaje = encontrado;
        } else {
          console.warn('Personaje no encontrado');
          this.volverAPrincipal();
        }
      });
    }
  }

  volverAPrincipal(): void {
    this.router.navigate(['/personajes']);
  }
}
