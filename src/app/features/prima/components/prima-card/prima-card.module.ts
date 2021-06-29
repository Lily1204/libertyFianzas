import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaCardComponent } from './prima-card.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PrimaCardComponent],
  imports: [CommonModule, MatCardModule, FlexLayoutModule, MatIconModule],
  exports: [PrimaCardComponent],
})
export class PrimaCardModule {}
