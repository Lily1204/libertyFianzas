import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimaModule } from './features/prima/prima.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/prima/prima.module').then(
        (m) => m.PrimaModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PrimaModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
