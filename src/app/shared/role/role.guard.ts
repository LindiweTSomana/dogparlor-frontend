import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtClientService } from 'src/app/services/security-client/jwt-client.service';

export const roleGuard: CanActivateFn = (route, state) => {
  let jwtService = inject(JwtClientService);
  let router = inject(Router);

  if (jwtService.haveAdminAccess()) {
    return true;
  } else {
    router.navigate(['home']);
    return false;
  }
};
