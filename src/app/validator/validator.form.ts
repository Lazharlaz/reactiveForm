import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function isRequiredValidator(
  controlName1: string,
  controlName2: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // Get first control value
    const value1 = control.get(controlName1)?.value;
    // Get second control value
    const value2 = control.get(controlName2)?.value;

    if (value1 == '' || value2 == '') {
      return { notEqual: true };
    } else {
      return null;
    }
  };
}

export function rangeDateValidator(
  minDate: number,
  maxDate: number
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value > minDate && control.value < maxDate) {
      return null;
    } else
      return {
        validYear: true,
        min: {
          minimal: minDate,
          maximal: maxDate,
        },
      };
  };
}
