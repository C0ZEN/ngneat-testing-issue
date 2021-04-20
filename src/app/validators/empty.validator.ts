import { ValidatorFn } from "@angular/forms";
import {
  AbstractControl,
  ValidationErrors
} from "@ngneat/reactive-forms/lib/types";

export interface EmptyValidationError extends ValidationErrors {
  isEmpty: true;
}

export function validatorEmpty(): ValidatorFn {
  console.log("[Validator.empty] Created");

  return (control: AbstractControl): EmptyValidationError | null => {
    console.log(`[Validator.empty] Checking validity for "${control.value}"`);

    if (
      control.value === "" ||
      control.value === null ||
      control.value === undefined
    ) {
      return { isEmpty: true };
    }

    return null;
  };
}
