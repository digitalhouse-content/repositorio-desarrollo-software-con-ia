// src/app/user-list/user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="user-list-header">
      <h2>Listado de Usuarios</h2>
      <button class="add-user-btn" routerLink="/register">
        Agregar Usuario
      </button>
    </div>
    <div class="user-list">
      <div *ngFor="let user of users" class="user-card">
        <h3>{{ user.full_name }}</h3>
        <p>Email: {{ user.email }}</p>
        <div class="action-buttons">
          <button class="edit-btn" (click)="editUser(user.id)">Editar</button>
          <button class="delete-btn" (click)="deleteUser(user.id)">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  `,
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => (this.users = data));
  }

  editUser(id: number): void {
    this.router.navigate(['/users', id]);
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      // Actualizar la lista tras eliminar
      this.users = this.users.filter((user) => user.id !== id);
    });
  }
}
