import { ValidatorFn } from "@angular/forms";

export function passMatchVAldiator(passwordControl:string, repasswordControl:string): ValidatorFn {
    return (control) => {
        const passFirts = control.get(passwordControl)
        const passSecond = control.get(repasswordControl)
        const isMatched = passFirts?.value === passSecond?.value
        console.log({isMatched});
        
        return isMatched 
        ? null
        : {passMatchVAldiator: true}
    }
}