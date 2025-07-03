import { Component, OnDestroy, OnInit } from '@angular/core';
import { Personaje } from '../../Interfaces/personaje';
import { ComunicaComponentePersonajeService } from '../../servicios/personaje/comunica-componente-personaje.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'listar-personajes',
  templateUrl: './listar-personajes.component.html',
  styleUrls: ['./listar-personajes.component.css']
})
export class ListarPersonajesComponent implements OnInit, OnDestroy {
  constructor(
    private servicioComunicaPersonaje: ComunicaComponentePersonajeService,
    public authService: AuthService // Inyectamos el servicio de autenticación
  ) { }
  public personajes: Personaje[] = [];

  private subscription: Subscription = new Subscription();
  ngOnInit(): void {
    this.subscription = this.servicioComunicaPersonaje.personajes$.subscribe((personajes) => {
      this.personajes = personajes;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  eliminarPersonaje(indice: number): void {
    this.servicioComunicaPersonaje.eliminarPersonaje(indice);
  }

  modificarPersonaje(personaje: Personaje, indice: number): void {
    this.servicioComunicaPersonaje.enviarModificarPersonaje({ ...personaje });
    this.eliminarPersonaje(indice);
  }
}
