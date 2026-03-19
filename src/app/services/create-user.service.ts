import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IUserRequest } from '../interfaces/user-request.interface';
import { IUserCreateResponse } from '../interfaces/user-create-response.interface';
import { AUTH_TOKEN_ENABLED } from '../interceptors/auth.interceptor';

@Injectable({
  providedIn: 'root',
})
export class CreateUserService {
  private readonly _httpClient = inject(HttpClient);

  createUser(newUser: IUserRequest) {

    //const headers = new HttpHeaders().set('authorization', 'Bearer ' + localStorage.getItem('token')!);
    const newHeaders = new HttpHeaders().set('useAuth', 'y');
    return this._httpClient.post<IUserCreateResponse>('http://localhost:3000/create-user', 
      newUser,
      {
        headers: newHeaders,
        context: new HttpContext().set(AUTH_TOKEN_ENABLED, false),
      }      
    );
  };
};
