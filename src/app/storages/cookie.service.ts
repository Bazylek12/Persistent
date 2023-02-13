import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CookieStorage implements Storage {
  constructor(private _cookieService: CookieService) {
  }

  setItem(key: string, value: string) {
    return this._cookieService.set(key, value)
  }

  getItem(key: string) {
    return this._cookieService.get(key);
  }

  removeItem(key: string) {
    return this._cookieService.delete(key)
  }

/* UNUSED MEMBERS */

  readonly length: number = 0;
  clear(): void {
  }
  key(index: number): string | null {
    // @ts-ignore
    return undefined;
  }


}
