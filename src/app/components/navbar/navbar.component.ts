import { Component, OnInit, ElementRef } from '@angular/core';

import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import {constants} from '../../constants/constants';
import {ADMIN_ROUTES, DEO_ROUTES} from '../sidebar/sidebar.component';
import {SharedService} from '../../pages/service/admin-web-services/shared-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(location: Location,  private element: ElementRef, private router: Router,private sharedService:SharedService) {
    this.location = location;
  }

  ngOnInit() {

    let role = localStorage.getItem(constants.user_role_key);

   this.changeListItem(role)

    this.sharedService.roleStateEvent.subscribe(
        res=>{
          this.changeListItem(res)
        }
    )


  }

  changeListItem(role){
    if (role == 'ROLE_ADMIN'){
      this.listTitles = ADMIN_ROUTES.filter(listTitle => listTitle);
    }else{
      this.listTitles = DEO_ROUTES.filter(listTitle => listTitle);
    }
  }

  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

}
