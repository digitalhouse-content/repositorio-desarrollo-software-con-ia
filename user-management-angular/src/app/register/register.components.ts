// src/app/register/register.component.ts
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  template: `
    <h2>Registro de Usuario</h2>
    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
      <label>Email:</label>
      <input formControlName="email" type="email" required />
      <label>Contraseña:</label>
      <input formControlName="password" type="password" required />
      <label>Nombre Completo:</label>
      <input formControlName="full_name" type="text" required />
      <button type="submit">Registrar</button>
      <p class="nav-link">
        ¿Ya tienes cuenta? <a routerLink="/">Inicia sesión</a>
      </p>
    </form>
  `,
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      full_name: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.userService
        .createUser(this.registerForm.value)
        .subscribe((response) => {
          // Luego de crear el usuario, se puede redirigir al login o a otra sección.
          this.router.navigate(['/']);
        });
    }
  }
}
