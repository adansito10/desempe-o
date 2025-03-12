import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private adminEmails = ['admin@dx-email.com'];
  private adminPassword = 'admin123';
  private currentUserSubject: BehaviorSubject<string | null>;
  public currentUser: Observable<string | null>;

  constructor(private router: Router) {
    this.currentUserSubject = new BehaviorSubject<string | null>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(email: string, password: string): boolean {
    console.log('Validando credenciales:', email, password); // Añadido para depurar
    if (this.validateCredentials(email, password)) {
      localStorage.setItem('currentUser', email);
      this.currentUserSubject.next(email);
      console.log('Login exitoso'); // Añadido para depurar
      return true;
    }
    console.log('Login fallido'); // Añadido para depurar
    return false;
  }

  private validateCredentials(email: string, password: string): boolean {
    return this.adminEmails.includes(email) && password === this.adminPassword;
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  isAdmin(): boolean {
    const currentUser = this.currentUserSubject.value;
    return currentUser ? this.adminEmails.includes(currentUser) : false;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/iniciar-sesion']);
  }

  getCurrentUser(): string | null {
    return this.currentUserSubject.value;
  }
}