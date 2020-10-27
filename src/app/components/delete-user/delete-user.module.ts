import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DeleteUserComponent } from './delete-user.component';

@NgModule({
  declarations: [DeleteUserComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [DeleteUserComponent],
})
export class DeleteUserComponentModule {}
