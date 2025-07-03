import { Component } from '@angular/core';
import { Personaje } from '../../Interfaces/personaje';
import { ComunicaComponenteTransformacionService } from '../../servicios/transformacion/comunica-componente-transformacion.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'agregar-transformacion',
  templateUrl: './agregar-transformacion.component.html',
  styleUrls: ['./agregar-transformacion.component.css']
})
export class AgregarTransformacionComponent {

  public personajes: string[] = [];
  public personaje: string = '';

  constructor(private servicioComunicaTransformaciones: ComunicaComponenteTransformacionService) { 
    this.cargarPersonajesTransformacionesAPI();
  } 


  async cargarPersonajesTransformacionesAPI(): Promise<void> {
    await this.servicioComunicaTransformaciones.cargarPersonajesTransformacionesAPI();
  }

  async filtrarTransformacionesIDB(): Promise<void> {
    this.servicioComunicaTransformaciones.filtrarTransformacionesIDB(this.personaje);
  }

  private subscription: Subscription = new Subscription(); 
  ngOnInit(): void {
    this.subscription = this.servicioComunicaTransformaciones.personajes$.subscribe(personajes => {
      this.personajes = personajes;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
