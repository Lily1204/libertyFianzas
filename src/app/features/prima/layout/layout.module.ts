import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutPrimaModule {}
