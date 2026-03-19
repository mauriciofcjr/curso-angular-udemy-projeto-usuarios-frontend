import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IUserRequest } from '../interfaces/user-request.interface';
import { IUserCreateResponse } from '../interfaces/user-create-response.interface';

@Injectable({
  providedIn: 'root',
})
export class CreateUserService {
  private readonly _httpClient = inject(HttpClient);

  createUser(newUser: IUserRequest) {

    //const headers = new HttpHeaders().set('authorization', 'Bearer ' + localStorage.getItem('token')!);

    return this._httpClient.post<IUserCreateResponse>('http://localhost:3000/create-user', 
      newUser      
    );
  };
};
