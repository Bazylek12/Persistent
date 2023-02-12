import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  readonly columnData = ['uid', 'email']
  readonly userData$: Observable<{name: string, value: string}[]> = this._usersService.getUserData().pipe(
    map((response) =>
    this.columnData.map((data) => (
      {
        name: data,
        value: response.data.user.context[data]
      })
    )
  ));

  constructor(private _authService: AuthService, private _httpClient: HttpClient, private _usersService: UsersService) {
  }

  logout(): void {
    this._authService.logout()
  }
}
