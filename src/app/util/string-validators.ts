import { AbstractControl, ValidationErrors } from '@angular/forms';

export const whitespaceValidator = ({ value }: AbstractControl): ValidationErrors => {
  if (!value) return null;

  return (value as string).trim().length > 0 ? null : { whitespace: true };
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = (valor: string): boolean => {
  return EMAIL_REGEX.test(valor);
};

export const emailValidator = ({ value }: AbstractControl): ValidationErrors => {
  if (!value) return null;

  return isValidEmail(value) ? null : { emailValid: true };
};
