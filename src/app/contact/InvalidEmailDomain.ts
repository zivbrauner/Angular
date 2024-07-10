
import { AbstractControl, ValidationErrors } from "@angular/forms";

export function invalidEmailDomain(control: AbstractControl): ValidationErrors | null {
    const value = control.value?.toLowerCase();
    const  hosts = ['gmail.com','yahoo.com'];
    if(!value){
        return null;
    }

    const matches = hosts.some(host=> value.includes(host));

    if(matches){
        return {invalidEmailDomain : true};
    }else{
        return null;
    }
}