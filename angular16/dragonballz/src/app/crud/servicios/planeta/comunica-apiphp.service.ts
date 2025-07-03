import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planeta } from '../../Interfaces/planeta';
import { catchError, firstValueFrom, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicaApiphpService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/apiplanetas'; // URL base de la API PHP
  private headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  
  async cargarPlanetas(): Promise<{ data: Planeta[]; message: string }> {
    try {
      const response = await firstValueFrom(
        this.http.get<{ success: boolean; data: Planeta[]; message: string }>(`${this.apiUrl}/leer.php`).pipe(
          catchError((error) => {
            console.error('Error al traer datos de la API:', error);
            return of({ success: false, data: [], message: 'Error al obtener planetas' });
          })
        )
      );
      return {
        data: response.success ? response.data : [],
        message: response.message || 'Error al obtener datos'
      };
    } catch (error) {
      console.error('Error inesperado al conectar con la API:', error);
      return { data: [], message: 'Error inesperado' };
    }
  }

  async agregarPlaneta(planeta: Planeta): Promise<{ success: boolean; message: string }> {
    try {
      console.log(planeta);
      const response = await firstValueFrom(
        this.http.post<{ success: boolean; message: string }>(`${this.apiUrl}/grabar.php`, planeta, { headers: this.headers }).pipe(
          catchError((error) => {
            console.error('Error al enviar datos a la API:', error);
            return of({ success: false, message: 'Error al enviar datos a la API' });
          })
        )
      );
      return {
        success: response.success,
        message: response.message || 'Operación realizada'
      };
    } catch (error) {
      console.error('Error inesperado al conectar con la API:', error);
      return { success: false, message: 'Error inesperado al conectar con la API' };
    }
  }

  async eliminarPlaneta(id: number): Promise<{ success: boolean; message: string }> {
    try {
      const response = await firstValueFrom(
        this.http.delete<{ success: boolean; message: string }>(`${this.apiUrl}/borrar.php?id=${id}`, { headers: this.headers }).pipe(
          catchError((error) => {
            console.error('Error al eliminar el personaje:', error);
            return of({ success: false, message: 'Error al eliminar el planeta' });
          })
        )
      );
      return {
        success: response.success,
        message: response.message || 'Operación realizada'
      };
    } catch (error) {
      console.error('Error inesperado al conectar con la API:', error);
      return { success: false, message: 'Error inesperado al conectar con la API' };
    }
  }

}
