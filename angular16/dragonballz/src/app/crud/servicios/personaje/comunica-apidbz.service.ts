import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personaje } from '../../Interfaces/personaje';
import { catchError, firstValueFrom, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicaApidbzService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://dragonball-api.com/api/characters';

  async cargarPersonajes(numero: number): Promise<Personaje[]> {
    try {
      const apiUrl = `${this.apiUrl}?limit=${numero}`;

      const response = await firstValueFrom(
        this.http.get<{ items: Personaje[] }>(apiUrl).pipe(
          catchError((error) => {
            console.error('Error al traer datos de la API:', error);
            return of({ items: [] });
          })
        )
      );
      return response.items;
    } catch (error) {
      console.error('Error inesperado al conectar con la API:', error);
      return [];
    }
  }
  
  async filtrarPersonajesAPI(numero: number, filtros: { gender: string; race: string; affiliation: string }): Promise<Personaje[]> {
    let apiUrl = `${this.apiUrl}?limit=${numero}`; // Observa la llamada en 'Swagger UI' de 'Dragon Ball' y entenderás porqué uso '?limit=numero'
    try {
      if (filtros.gender) {
        apiUrl += `&gender=${encodeURIComponent(filtros.gender)}`;
      }
      if (filtros.race) {
        apiUrl += `&race=${encodeURIComponent(filtros.race)}`;
      }
      if (filtros.affiliation) {
        apiUrl += `&affiliation=${encodeURIComponent(filtros.affiliation)}`;
      }
      console.log('URL generada para filtros:', apiUrl);
      
      const response = await firstValueFrom(
        this.http.get<Personaje[]>(apiUrl).pipe(
          catchError((error) => {
            console.error('Error al traer datos de la API:', error);
            return of([]);
          })
        )
      );
      return response;
    } catch (error) {
      console.error('Error inesperado al conectar con la API:', error);
      return [];
    }
  }
}
