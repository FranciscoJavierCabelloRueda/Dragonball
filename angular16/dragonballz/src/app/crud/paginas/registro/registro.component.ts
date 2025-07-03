import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre: string = '';
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onRegister(form: any): Promise<void> {
    if (!form.valid) {
      alert('Por favor, completa todos los campos');
      return;
    }

    this.authService.register(this.nombre, this.username, this.password).subscribe({
      next: () => {
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert(`Registro fallido: ${err.message}`);
      },
    });
  }

  volverAPrincipal(): void {
    this.router.navigate(['/principal']);
  }
}
