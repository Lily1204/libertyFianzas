import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextExpirationListComponent } from './next-expiration-list.component';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [NextExpirationListComponent],
  imports: [CommonModule, MatTableModule, FlexLayoutModule],
  exports: [NextExpirationListComponent],
})
export class NextExpirationListModule {}
