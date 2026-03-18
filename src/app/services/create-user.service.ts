import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateUserService {
  private readonly _httpClient = inject(HttpClient);

  createUser(newUser: { name: string, email: string, username: string, password: string; }) {

    const headers = new HttpHeaders().set('authorization', 'Bearer ' + localStorage.getItem('token')!);

    return this._httpClient.post<{ message: string, token: string }>('http://localhost:3000/create-user', newUser, {
      headers,
    }).pipe(
      map((createUserResponse) => {
        localStorage.setItem('token', createUserResponse.token);

        return createUserResponse;
      })
    )
  };
};
