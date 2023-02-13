import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, take, tap} from 'rxjs';
import { TokenModel } from '../models/token.model';
import { CredentialModel } from '../models/credential.model';
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private _httpClient: HttpClient, private _router: Router, private storage: Storage) {
  }
  private _tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.storage.getItem('token')!);

  public get tokenValue(): string {
    return this._tokenSubject.value;
  }

  login(credentials: CredentialModel): Observable<TokenModel> {
    return this._httpClient.post<TokenModel>(`${environment.apiUrl}/auth/login`,
      { data: credentials }).pipe(
        take(1),
        tap((res) => {
          this._tokenSubject.next(res.data.accessToken);
          this.storage.setItem('token', res.data.accessToken)
        })
      )
  }

  logout() {
    this.storage.removeItem('token')
    this._tokenSubject.next('')
    this._router.navigate(['/login'])
  }
}
