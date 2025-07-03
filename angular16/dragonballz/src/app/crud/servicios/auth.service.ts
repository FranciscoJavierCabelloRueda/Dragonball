import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authToken = new BehaviorSubject<string | null>(null);
  private username = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {
    this.loadSession();
  }

  login(username: string, password: string): Observable<string> {
    return this.http.post<any>('http://localhost:8080/login.php', { username, password }).pipe(
      tap(response => {
        this.authToken.next(response.token);
        this.username.next(response.username);
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('username', response.username);
      }),
      map(response => response.username)
    );
  }

  register(nombre: string, username: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:8080/register.php', { nombre, username, password });
  }

  logout(): void {
    this.authToken.next(null);
    this.username.next(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
  }

  isAuthenticated(): boolean {
    return this.authToken.value !== null;
  }

  getUsername(): string | null {
    return this.username.value;
  }

  public loadSession(): void {
    const token = localStorage.getItem('authToken');
    const username = localStorage.getItem('username');
    if (token && username) {
      this.authToken.next(token);
      this.username.next(username);
    }
  }
}
