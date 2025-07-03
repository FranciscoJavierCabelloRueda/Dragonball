import { Component, OnInit, OnDestroy } from '@angular/core';
import { Personaje } from '../../Interfaces/personaje';
import { ComunicaComponentePersonajeService } from '../../servicios/personaje/comunica-componente-personaje.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent implements OnInit, OnDestroy {

  constructor(private servicioComunicaPersonaje: ComunicaComponentePersonajeService) { } // Variable para usar el servicio

  public personaje: Personaje = {};
  public numero: number = 2;

  // Filtros 
  public filtros = {
    gender: '',
    race: '',
    affiliation: '',
  };
  // Listas para los selectores
  public razas = [
    'Human',
    'Saiyan',
    'Namekian',
    'Majin',
    'Frieza Race',
    'Android',
    'Jiren Race',
    'God',
    'Angel',
    'Evil',
    'Nucleico',
    'Nucleico benigno',
    'Unknown',
  ];
  public afiliaciones = [
    'Z Fighter',
    'Red Ribbon Army',
    'Namekian Warrior',
    'Freelancer',
    'Army of Frieza',
    'Pride Troopers',
    'Assistant of Vermoud',
    'God',
    'Assistant of Beerus',
    'Villain',
    'Other',
  ];

  agregarPersonaje(): void {
    this.servicioComunicaPersonaje.agregarPersonaje({ ...this.personaje });
    this.personaje = {};
  }

  async cargarPersonajesAPI(): Promise<void> {
    await this.servicioComunicaPersonaje.cargarPersonajesAPI(this.numero);
  }

  async filtrarPersonajesAPI(): Promise<void> {
    await this.servicioComunicaPersonaje.filtrarPersonajesAPI(this.numero, this.filtros);
  }

  private subscription: Subscription = new Subscription();
  ngOnInit(): void {
    this.subscription = this.servicioComunicaPersonaje.modificarPersonaje$.subscribe(personaje => {
      this.personaje = personaje;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
