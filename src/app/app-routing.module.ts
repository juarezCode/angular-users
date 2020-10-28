import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionGuard } from './guards/session.guard';
import { AuthenticationLayout } from './layouts/authentication/authentication.layout';
import { AuthenticationLayoutModule } from './layouts/authentication/authentication.module';
import { LayoutComponent } from './layouts/layout/layout.component';
import { LayoutModule } from './layouts/layout/layout.module';
import { CreateUserModule } from './pages/create-user/create-user.module';
import { CreateUserPage } from './pages/create-user/create-user.page';
import { DeleteUserModule } from './pages/delete-user/delete-user.module';
import { DeleteUserPage } from './pages/delete-user/delete-user.page';
import { LoginModule } from './pages/login/login.module';
import { LoginPage } from './pages/login/login.page';
import { UpdateUserModule } from './pages/update-user/update-user.module';
import { UpdateUserPage } from './pages/update-user/update-user.page';
import { UserListModule } from './pages/user-list/user-list.module';
import { UserListPage } from './pages/user-list/user-list.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: AuthenticationLayout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: LoginPage,
      },
    ],
  },
  {
    path: 'app',
    component: LayoutComponent,
    canActivate: [SessionGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: UserListPage,
      },
      {
        path: 'create-user',
        component: CreateUserPage,
      },
      {
        path: 'delete-user/:userId',
        component: DeleteUserPage,
      },
      {
        path: 'update-user/:userId',
        component: UpdateUserPage,
      },
    ],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginModule,
    UserListModule,
    CreateUserModule,
    DeleteUserModule,
    UpdateUserModule,
    LayoutModule,
    AuthenticationLayoutModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
