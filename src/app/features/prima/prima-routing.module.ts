import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LayoutPrimaModule } from './layout/layout.module';
import { PrimaPagesModule } from './pages/prima-pages.module';
import { PrimaPagesComponent } from './pages/prima-pages.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: PrimaPagesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), PrimaPagesModule, LayoutPrimaModule],
  exports: [RouterModule],
})
export class PrimaRoutingModule {}
