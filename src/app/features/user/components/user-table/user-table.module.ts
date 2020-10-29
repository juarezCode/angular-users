import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableComponent } from './user-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [UserTableComponent],
  imports: [CommonModule, MatButtonModule, MatTableModule, MatProgressSpinnerModule],
  exports: [UserTableComponent],
})
export class UserTableComponentModule {}
