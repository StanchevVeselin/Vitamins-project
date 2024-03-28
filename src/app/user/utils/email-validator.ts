import { ValidatorFn } from "@angular/forms";


export function emailValidator(domains:string[]): ValidatorFn {
    const domainString = domains.join("|")
    const regex = new RegExp(`[A-Za-z0-9]+@gmail\.(${domainString})`)


    return (control) => {
        const isEmailInvalid = control.value === "" || regex.test(control.value)
        return isEmailInvalid ? null : { emailValidator: true }
    }
}