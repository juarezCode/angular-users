import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserModule } from './pages/create-user/create-user.module';
import { CreateUserPage } from './pages/create-user/create-user.page';
import { LoginModule } from './pages/login/login.module';
import { LoginPage } from './pages/login/login.page';
import { UserListModule } from './pages/user-list/user-list.module';
import { UserListPage } from './pages/user-list/user-list.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app',
  },
  {
    path: 'login',
    component: LoginPage,
    children: [],
  },
  {
    path: 'app',
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule, UserListModule, CreateUserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
