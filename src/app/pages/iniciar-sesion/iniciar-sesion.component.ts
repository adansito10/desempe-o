// src/app/pages/iniciar-sesion/iniciar-sesion.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: false,
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent {
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log('onSubmit ejecutado'); // Añadido para depurar
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    console.log('Email:', email, 'Password:', password); // Añadido para depurar

    if (this.authService.login(email, password)) {
      if (this.authService.isAdmin()) {
        this.router.navigate(['/admin-panel']);
      } else {
        this.errorMessage = 'No tienes privilegios para acceder al panel administrativo.';
        this.authService.logout();
      }
    } else {
      this.errorMessage = 'Correo o contraseña incorrectos.';
    }
  }
}