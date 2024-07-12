import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const rotuer = inject(Router)
  if(localStorage.getItem('username') != 'admin'){
    return true 
  }
  rotuer.navigate(['../list'])
  return false
};
