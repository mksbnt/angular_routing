import { AbstractControl } from "@angular/forms";

export function emailValidator (
  control: AbstractControl
): { [key: string]: any } {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let value = control.value;
  let result = emailRegex.test(value);

  if (result) {
    return null;
  } else {
    return { emailValidator: { value } };
  }
}

export function firstNameValidator (
  control: AbstractControl
): { [key: string]: any } {
  let firstNameRegEx = /^[a-z][a-z\s]*$/;
  let value = control.value;
  let result = firstNameRegEx.test(value);

  if (result) {
    return null;
  } else {
    return { firstNameValidator: { value } };
  }
}

export function secondNameValidator (
  control: AbstractControl
): { [key: string]: any } {
  let secondNameRegEx = /^[a-z][a-z\s]*$/;
  let value = control.value;
  let result = secondNameRegEx.test(value);

  if (result) {
    return null;
  } else {
    return { secondNameValidator: { value } };
  }
}
