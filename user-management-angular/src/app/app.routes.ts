import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.components';
import { UserListComponent } from './user-list/user-list.components';
import { AuthGuard } from './guards/auth.guard';
import { UserDetailComponent } from './user-detail/user-detail.component';


export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  {
    path: 'users/:id',
    component: UserDetailComponent,
    canActivate: [AuthGuard],
  },
];
