import { AbstractControl } from '@angular/forms';

export function isLowerCase(control: AbstractControl) {
  const enterValue = control.value as string;
  if (enterValue !== enterValue.toLowerCase()) {
    return { lower: true };
  } else {
    return null;
  }
}
