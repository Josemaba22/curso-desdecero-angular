import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/components/login/login.component';
import { RegisterComponent } from './login/components/register/register.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent  },
    { path: '**', redirectTo: 'login'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
