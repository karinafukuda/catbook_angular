import { AuthenticationGuard } from './auth/authentication.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((modulo) => modulo.HomeModule),
    canLoad: [LoginGuard],
  },
  {
    path: 'animals',
    loadChildren: () =>
      import('./animals/animals.module').then((modulo) => modulo.AnimalsModule),
    canLoad: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// pathMatch -> remove os espaços para quem digita o end da rota
