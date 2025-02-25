// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  private baseUrl = 'http://localhost:8000/api/v1/users/';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  createUser(user: any): Observable<any> {
    return this.http.post(this.baseUrl, user);
  }

  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl, { headers: this.getAuthHeaders() });
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${id}`, {
      headers: this.getAuthHeaders(),
    });
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${id}`, user, {
      headers: this.getAuthHeaders(),
    });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}`, {
      headers: this.getAuthHeaders(),
    });
  }
}
