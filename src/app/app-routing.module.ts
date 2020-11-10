import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionGuard } from './features/auth/guards/session.guard';
import { AuthenticationLayout } from './layouts/authentication/authentication.layout';
import { AuthenticationLayoutModule } from './layouts/authentication/authentication.module';
import { LayoutComponent } from './layouts/layout/layout.component';
import { LayoutModule } from './layouts/layout/layout.module';
import { CreateUserModule } from './features/user/pages/create-user/create-user.module';
import { CreateUserPage } from './features/user/pages/create-user/create-user.page';
import { DeleteUserModule } from './features/user/pages/delete-user/delete-user.module';
import { DeleteUserPage } from './features/user/pages/delete-user/delete-user.page';
import { LoginModule } from './features/auth/pages/login/login.module';
import { LoginPage } from './features/auth/pages/login/login.page';
import { UpdateUserModule } from './features/user/pages/update-user/update-user.module';
import { UpdateUserPage } from './features/user/pages/update-user/update-user.page';
import { UserListModule } from './features/user/pages/user-list/user-list.module';
import { UserListPage } from './features/user/pages/user-list/user-list.page';
import { ProductListPage } from './features/product/pages/product-list/product-list.page';
import { ProductListModule } from './features/product/pages/product-list/product-list.module';
import { CreateProductPage } from './features/product/pages/create-product/create-product.page';
import { CreateProductModule } from './features/product/pages/create-product/create-product.module';
import { DeleteProductPage } from './features/product/pages/delete-product/delete-product.page';
import { DeleteProductModule } from './features/product/pages/delete-product/delete-product.module';
import { UpdateProductPage } from './features/product/pages/update-product/update-product.page';
import { UpdateProductModule } from './features/product/pages/update-product/update-product.module';

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
        redirectTo: 'products',
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: UserListPage,
          },
          {
            path: 'create',
            component: CreateUserPage,
          },
          {
            path: 'delete/:userId',
            component: DeleteUserPage,
          },
          {
            path: 'update/:userId',
            component: UpdateUserPage,
          },
        ],
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: ProductListPage,
          },
          {
            path: 'create',
            component: CreateProductPage,
          },
          {
            path: 'delete/:productId',
            component: DeleteProductPage,
          },
          {
            path: 'update/:productId',
            component: UpdateProductPage,
          },
        ],
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
    ProductListModule,
    CreateProductModule,
    DeleteProductModule,
    UpdateProductModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
