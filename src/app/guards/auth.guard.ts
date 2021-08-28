import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from '../pages/service/admin-web-services/authentication.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthenticationService, private router: Router) {
    }


    canActivate(): boolean {
        // if (!this.authService.loggedIn()) {
        //     this.router.navigate(['/login'], {replaceUrl: true});
        //     return false;
        // } else {
        //     return true;
        // }
        return true;
    }
}
