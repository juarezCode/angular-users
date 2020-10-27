import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    redirectTo: 'app',
  },
  {
    path: 'login',
    component: LoginPage,
    children: [],
  },
  {
    path: 'app',
    component: LayoutComponent,
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
  { path: '**', redirectTo: 'app', pathMatch: 'full' },
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
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
