import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onLogin(form: any): Promise<void> {
    if (!form.valid) {
      alert('Por favor, completa todos los campos');
      return;
    }

    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/principal']); // Redirige tras login exitoso
      },
      error: (err) => {
        alert(`Inicio de sesión fallido: ${err.message}`);
      },
    });
  }

  volverAPrincipal(): void {
    this.router.navigate(['/principal']);
  }
}
