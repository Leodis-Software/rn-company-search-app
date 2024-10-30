import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public notNullOrEmpty = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      const isNullOrEmpty = (control.value || '').trim().length === 0;
      return isNullOrEmpty ? { nullOrEmpty: true } : null;
    };
  };
}
