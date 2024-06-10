import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoginModule,
  ]
})
export class AppModule { }
