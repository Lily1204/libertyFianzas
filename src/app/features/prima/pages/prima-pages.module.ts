import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaPagesComponent } from './prima-pages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PrimaCardModule } from '../components/prima-card/prima-card.module';
import { NextExpirationListModule } from '../components/next-expiration-list/next-expiration-list.module';
import { PrimaListModule } from '../components/prima-list/prima-list.module'

@NgModule({
  declarations: [PrimaPagesComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    PrimaCardModule,
    NextExpirationListModule,
    PrimaListModule
  ],
})
export class PrimaPagesModule {}
