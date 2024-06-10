import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/pages.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// export const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent  },
//   { path: '**', redirectTo: 'login'}
// ];

@NgModule({
  declarations: [
    MainPageComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    MainPageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class LoginModule { }
