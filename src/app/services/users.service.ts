import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UsersService {
  constructor(private _httpClient: HttpClient) {
  }

  getUserData(): Observable<any> {
    return this._httpClient.get<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/me');
  }
}
