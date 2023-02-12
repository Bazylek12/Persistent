import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-auth-localstorage',
  styleUrls: ['./auth-localstorage.component.scss'],
  templateUrl: './auth-localstorage.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLocalstorageComponent {
  readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required
    ]),
    password: new FormControl('',
      Validators.required
    )
  });

  constructor(private _authService: AuthService, private _router: Router, private _cdr: ChangeDetectorRef) {
  }

  onLoginFormSubmitted(loginForm: FormGroup): void {
    if (!loginForm.valid) {
      return
    }
    this._authService.login({
        email: loginForm.value.email,
        password: loginForm.value.password
      }
    ).subscribe({
      next: () => this._router.navigate(['/logged-in']),
      error: (e) => {
        this.loginForm.setErrors({ invalidCredentials: e.error.message});
        this._cdr.detectChanges();
      },
    })
  }
}
