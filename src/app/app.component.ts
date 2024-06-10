import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginModule } from "./login/login.module";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginModule, HttpClientModule]
})
export class AppComponent {
  title = 'evaluacion-neoris-angular';
}
