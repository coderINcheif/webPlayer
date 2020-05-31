import { AuthService } from './../../authentication/shared/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(route, state: RouterStateSnapshot) {
    if (this.auth.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/authentication/login'], {
      queryParams: { next: state.url },
    });
    return false;
  }
}
