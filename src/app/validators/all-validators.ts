import { ValidationErrors, FormControl } from '@angular/forms';

export class AllValidators {
  // whitespace validation
  static notOnlyWhiteSpace(control: FormControl): ValidationErrors {
    if (control.value != null && control.value.trim().length === 0) {
      // invalid error object;
      return { notOnlyWhiteSpace: true };
    }
    // else okay
    return null;
  }
}
