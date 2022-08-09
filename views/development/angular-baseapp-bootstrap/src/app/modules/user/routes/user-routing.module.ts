import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuard } from 'src/app/guards/route.guard';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: LoginComponent,
    canActivate: [RouteGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
