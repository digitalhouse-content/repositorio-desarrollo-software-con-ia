// src/app/login/login.component.ts
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  template: `
    <h2>Iniciar Sesión</h2>
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <label>Email:</label>
      <input formControlName="username" type="email" required />
      <label>Contraseña:</label>
      <input formControlName="password" type="password" required />
      <button type="submit">Entrar</button>
      <p class="nav-link">
        ¿No tienes una cuenta? <a routerLink="/register">Regístrate</a>
      </p>
    </form>
  `,
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe((response) => {
        this.authService.setToken(response.access_token);
        // Redirigir a la sección de gestión de usuarios
        this.router.navigate(['/users']);
      });
    }
  }
}
