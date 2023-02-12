import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenModel } from '../models/token.model';
import { CredentialModel } from '../models/credential.model';
import {Router} from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private _httpClient: HttpClient, private _router: Router) {
  }
  private _tokenSubject: BehaviorSubject<TokenModel | string> = new BehaviorSubject<TokenModel | string>(localStorage.getItem('token')!);
  public token$: Observable<TokenModel | string> = this._tokenSubject.asObservable();

  public get tokenValue(): TokenModel | string {
    return this._tokenSubject.value;
  }

  login(credentials: CredentialModel): Observable<TokenModel> {
    return this._httpClient.post<TokenModel>('https://us-central1-courses-auth.cloudfunctions.net/auth/login',
      { data: credentials }).pipe(
        map((res) => {
          this._tokenSubject.next(res.data.accessToken);
          localStorage.setItem('token', res.data.accessToken)
          return res;
        })
      )
  }

  logout() {
    localStorage.removeItem('token')
    this._tokenSubject.next('')
    this._router.navigate(['/login'])
  }
}
