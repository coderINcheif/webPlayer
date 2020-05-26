import { FormErrorHandler } from './../../shared/error-handlers/form-error-handler.service';
import {
  requiredValidator,
  patternValidator,
} from './../../shared/validators/common.validator';
import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { minLengthValidator } from 'src/app/shared/validators/common.validator';
import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { runInThisContext } from 'vm';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  subs: Subscription = new Subscription();

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private fromErrHandler: FormErrorHandler
  ) {
    this.form = fb.group({
      email: [
        '',
        [requiredValidator, patternValidator(/.+@.+(\.([a-z]|[A-Z])+)+/)],
      ],
      password: ['', [requiredValidator, minLengthValidator(8)]],
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  ngOnInit(): void {}

  login(): void {
    this.fromErrHandler.updateValidity(this.form);
    if (this.form.invalid) {
      this.form.setErrors({ ...this.form.errors });
      this.form.markAllAsTouched();
      return;
    }
    const credentials = this.form.value;
    this.subs.add(
      this.auth.login(JSON.stringify(credentials)).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log('asfas');
          if (err.status === 422) {
            this.fromErrHandler.handleServerErrors(this.form, err.error);
          }
        }
      )
    );
  }
}
