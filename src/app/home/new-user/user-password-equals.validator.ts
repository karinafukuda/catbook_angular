import { FormGroup } from '@angular/forms';

export function sameUserPasswordValidator(formGroup: FormGroup) {
  const userName = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (userName.trim() + password.trim()) {
    return userName !== password ? null : { sameUserPassword: true };
  } else {
    return null;
  }
}
