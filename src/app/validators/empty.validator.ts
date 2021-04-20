import {
  AbstractControl,
  ValidationErrors
} from "@ngneat/reactive-forms/lib/types";

export function validatorEmpty(
  control: AbstractControl
): ValidationErrors | null {
  if (
    control.value === "" ||
    control.value === null ||
    control.value === undefined
  ) {
    return { isEmpty: true };
  }

  return null;
}
