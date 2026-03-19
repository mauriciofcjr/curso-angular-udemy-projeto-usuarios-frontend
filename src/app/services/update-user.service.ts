import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IUserRequest } from '../interfaces/user-request.interface';
import { IUserUpdateResponse } from '../interfaces/user-update-response.interface';

@Injectable({
  providedIn: 'root',
})
export class UpdateUserService {
  private readonly _httpClient = inject(HttpClient);

  updateUser(userInfos: IUserRequest ) {

    //const headers = new HttpHeaders().set('authorization', 'Bearer ' + localStorage.getItem('token')!);

    return this._httpClient.put<IUserUpdateResponse>('http://localhost:3000/update-user', 
      userInfos
    ).pipe(
      map((updateUserResponse) => {
        localStorage.setItem('token', updateUserResponse.token);

        return updateUserResponse;
      })
    )
  };
}
