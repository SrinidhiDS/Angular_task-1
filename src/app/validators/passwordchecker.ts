import { AbstractControl } from "@angular/forms";
export function passwordchecker(password:string,confirm_password:string){
    return function(form:AbstractControl){
        const passwordvalue = form.get(password)?.value
        const confirm_passwordvalue = form.get(confirm_password)?.value

    if(passwordvalue === confirm_passwordvalue){
        return null;
    }
    return {passworderror : true}
    }
}