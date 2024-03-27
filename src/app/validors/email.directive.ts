import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
// Don't work
@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi:true
    }
  ]
})
export class EmailDirective implements Validator{
    @Input("appEmail") appEmail: string[] =[]
      constructor() { }

      validator: ValidatorFn = () => null

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
      console.log(control);
      
        return null
    }

    emailValidator(domains:string[]): ValidatorFn{

      // [A-Za-z0-9]+@(gmail\.com|abv\.bg)

      return (control) => {
        return null
      }
    }
}

// Don't work
