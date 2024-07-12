import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor() { }
  letters: RegExp = /[a-zA-Z]/
  numbets: RegExp = /[0-9]/
  symbols: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/

  
  updateQuality(passForm:FormGroup, passQuality:string) {
    const inputPass = passForm.get('password');
    if (passForm.controls['password']?.errors?.['minlength']) {
      passQuality = 'little';
    } else if (
      inputPass?.value?.match(this.letters) &&
      inputPass?.value?.match(this.numbets) &&
      inputPass?.value?.match(this.symbols)
    ) {
      passQuality = 'strong';
    } else if (
      (inputPass?.value?.match(this.letters) && inputPass?.value?.match(this.numbets)) ||
      (inputPass?.value?.match(this.letters) && inputPass?.value?.match(this.symbols)) ||
      (inputPass?.value?.match(this.numbets) && inputPass?.value?.match(this.symbols))
    ) {
      passQuality = 'medium';
    } else if (!inputPass?.value) {
      passQuality = 'absent';
    } else {
      passQuality = 'weak';
    }
    
    return passQuality
  }
}
