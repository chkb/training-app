import { take, map, tap } from 'rxjs/operators';


import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { LoginProviderService } from './login-provider.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: LoginProviderService, private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.auth.user.pipe(
            take(1),
            map(user => !!user),
            tap(loggedIn => {
                if (!loggedIn) {
                    console.log('access denied');
                    this.router.navigate(['/login']);
                }
            })
        );
    }
}
