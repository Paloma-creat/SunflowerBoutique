import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = sessionStorage.getItem("user");

  if (!user || user.trim() === "") {
    alert("Usuário não está autenticado!");
    router.navigate(["/login"]);  
    return false;
  }

  return true;
};