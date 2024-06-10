import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiServer } from '../../api/api-server';

@Injectable({ providedIn: 'root' })
export class RegisterService {

    url: string = `${apiServer.url}/auth`;

    username: string = '';
    password: string = '';
    email: string = '';
    rol: string = '';

    constructor(
        private http: HttpClient,
    ) { }

    ngOnInit() { }

    registerUser(user: User): void {

        const localStorageExists = localStorage.getItem('user') ? true : false;

        if (!localStorageExists) {
            const users: User[] = [];
            users.push(user);
            // Convertir el objeto de usuario a una cadena JSON
            const userJson: string = JSON.stringify(users);
            
            // Almacenar el usuario en localStorage
            localStorage.setItem('user', userJson);
        } else {
            const userJson: User[] = JSON.parse(localStorage.getItem('user') as string);
            userJson.push(user);
            localStorage.setItem('user', JSON.stringify(userJson));
        }
    }

    // registerUser(user: User): Observable<any> {
    //     return this.http.post(`${this.url}/register`, user);
    // }

}