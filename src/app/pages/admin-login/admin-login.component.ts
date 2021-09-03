import {Component, OnInit} from '@angular/core';
import {AdminLoginService} from '../service/admin-web-services/admin-login.service';
import {NotifierService} from 'angular-notifier';
import {Router} from '@angular/router';
import {constants} from '../../constants/constants';
import {SharedService} from '../service/admin-web-services/shared-service';

@Component({
    selector: 'app-admin-login',
    templateUrl: './admin-login.component.html',
    styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

    private userName: string;
    private userPassword: string;

    constructor(
        private adminLoginService: AdminLoginService,
        private notifierService: NotifierService,
        private router: Router,
        private sharedService: SharedService
    ) {
    }

    ngOnInit(): void {
    }

    _adminLogin() {
        this.adminLoginService._adminLogin(this.userName, this.userPassword).subscribe((data) => {
                this.adminLoginService.saveToken(data);
                this.getUserDetails(this.userName);
            }, err => {
                this.notifierService.notify('error', 'You have entered invalid email or password. Please try again!');
            }
        );
    }


    getUserDetails(emailAddress) {

        this.adminLoginService._getUserDetails(emailAddress).subscribe(
            res => {

                localStorage.setItem('adminPanelUserId', res['body'].id);
                localStorage.setItem('adminPanelUserType', res['body'].role);
                localStorage.setItem(constants.user_role_key, res['body'].role);

                if (res['body']['role'] === 'ROLE_OPERATOR' || res['body']['role'] === 'ROLE_ADMIN') {

                    this.router.navigate(['/dashboard']);

                    let fullName = '';

                    if (res['body']['firstName'] != null) {
                        fullName = res['body']['firstName'];
                    }

                    if (res['body']['lastName'] != null) {
                        fullName += ' ' + res['res']['lastName'];
                    }

                    localStorage.setItem(constants.user_full_name_key, fullName);

                    this.sharedService.roleStateEvent.emit(res['body'].role);

                    this.sharedService.userNameEvent.emit(fullName);


                } else {
                    this.notifierService.notify('error', 'You do not have a permission to log in. if you think this is incorrect, please contact the SWLC Export Market administrators.');
                }

            }, error => {
                this.notifierService.notify('error', 'Something went wrong. Please try again!');
            });
    }
}
