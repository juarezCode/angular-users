import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    component: UserListPage,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule, UserListModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
