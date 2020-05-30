import { Subscription } from 'rxjs';
import { FormErrorHandler } from './../../shared/error-handlers/form-error-handler.service';
import { AuthService } from './../shared/services/auth.service';
import { clickTrigger } from './../shared/animations/button-click.animation';
import {
  minLengthValidator,
  patternValidator,
} from 'src/app/shared/validators/common.validator';
import { requiredValidator } from './../../shared/validators/common.validator';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'auth-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [clickTrigger],
})
export class SignupComponent implements OnInit, OnDestroy {
  form: FormGroup;
  mousedown = false;
  subs: Subscription = new Subscription();

  constructor(
    fb: FormBuilder,
    private auth: AuthService,
    private formErrHandler: FormErrorHandler
  ) {
    this.form = fb.group({
      email: [
        '',
        [requiredValidator, patternValidator(/.+@.+(\.([a-z]|[A-Z])+)+/)],
      ],
      first_name: [''],
      last_name: [''],
      password: ['', [requiredValidator, minLengthValidator(8)]],
      confirm_password: ['', [requiredValidator, minLengthValidator(8)]],
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  mouseEvent(event: Event) {
    event.stopPropagation();
    this.mousedown = event.type === 'mousedown' ? true : false;
  }

  get email() {
    return this.form.get('email');
  }
  get first_name() {
    return this.form.get('first_name');
  }
  get last_name() {
    return this.form.get('last_name');
  }
  get password() {
    return this.form.get('password');
  }
  get confirm_password() {
    return this.form.get('confirm_password');
  }

  singup(): void {
    if (this.form.invalid) {
      this.form.setErrors({ ...this.form.errors });
      this.form.markAllAsTouched();
      return;
    }
    const data = this.form.value;
    this.subs.add(
      this.auth
        .signup(JSON.stringify(data))
        .pipe()
        .subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            this.formErrHandler.handleServerErrors(this.form, err);
          }
        )
    );
  }
}
