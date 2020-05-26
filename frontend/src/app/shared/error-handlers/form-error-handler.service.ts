import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormErrorHandler {
  constructor() {}

  handleServerErrors(
    form: FormGroup,
    formErrors: { [key: string]: Array<string> | string }
  ): void {
    Object.keys(formErrors).forEach((control) => {
      const serverErrors = {};
      const controlError = formErrors[control];
      if (Array.isArray(controlError)) {
        const controlErrors = controlError as Array<string>;
        controlErrors.forEach((error, index: number) => {
          const errorTag = `server_${index}`;
          serverErrors[errorTag] = error;
        });
        form.controls[control].setErrors(serverErrors);
      } else {
        form.controls[control].setErrors({ server: formErrors[control] });
      }
    });
    form.markAllAsTouched();
  }

  updateValidity(form: FormGroup) {
    Object.keys(form.controls).forEach((control) => {
      form.controls[control].updateValueAndValidity();
    });
  }
}
