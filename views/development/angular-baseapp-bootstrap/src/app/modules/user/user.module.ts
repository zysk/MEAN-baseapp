import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { UserRoutingModule } from './routes/user-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
