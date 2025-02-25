// src/app/user-detail/user-detail.component.ts
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <h2>Detalle/Edición de Usuario</h2>
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <label>Email:</label>
      <input formControlName="email" type="email" required />
      <label>Nombre Completo:</label>
      <input formControlName="full_name" type="text" required />
      <label>Contraseña (opcional):</label>
      <input formControlName="password" type="password" />
      <button type="submit">Actualizar</button>
    </form>
  `,
})
export class UserDetailComponent implements OnInit {
  userForm: FormGroup;
  userId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      full_name: ['', Validators.required],
      password: [''],
    });
  }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(this.userId).subscribe((user) => {
      this.userForm.patchValue({
        email: user.email,
        full_name: user.full_name,
      });
    });
  }

  onSubmit(): void {
    this.userService
      .updateUser(this.userId, this.userForm.value)
      .subscribe(() => {
        this.router.navigate(['/users']);
      });
  }
}
