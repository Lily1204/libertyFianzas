import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaListComponent } from './prima-list.component';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PrimaListComponent],
  imports: [CommonModule, MatTableModule, FlexLayoutModule],
  exports: [PrimaListComponent],
})
export class PrimaListModule {}
