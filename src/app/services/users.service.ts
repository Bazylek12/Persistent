import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, take} from 'rxjs';
import {ApiResponseModel} from "../models/api-response.model";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class UsersService {
  constructor(private _httpClient: HttpClient) {
  }

  getUserData(): Observable<ApiResponseModel> {
    return this._httpClient.get<ApiResponseModel>(`${environment.apiUrl}/auth/me`).pipe(
      take(1)
    );
  }
}
