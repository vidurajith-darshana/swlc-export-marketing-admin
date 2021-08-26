import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AdminLoginService} from '../pages/service/admin-web-services/admin-login.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(
        private adminLoginService : AdminLoginService,
        private router : Router
    ) {
    }

    canActivate(): boolean {
        if (this.adminLoginService.loggedIn()){
            return true;
        }else{
            this.router.navigate(['/login'],{replaceUrl:true});
            return false;
        }
    }
}
