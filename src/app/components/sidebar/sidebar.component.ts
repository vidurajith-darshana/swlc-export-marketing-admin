import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}


export const ROUTES: RouteInfo[] = [
    {path: '/manage-category', title: 'Manage Category', icon: 'ni-tv-2 text-primary', class: ''},
    {path: '/manage-orders', title: 'Manage Orders', icon: 'ni-planet text-blue', class: ''},
    {path: '/manage-products', title: 'Manage Products', icon: 'ni-bullet-list-67 text-red', class: ''},
    {path:'/registration_DEO', title: 'DEO Register', icon: '', class: ''},
    {path: '/reviews', title:'Customer Reviews Report', icon:'', class: ''},
    {path: '/testimonial', title:'Testimonial', icon:'', class: ''},
    {path: '/promotions', title:'Promotions', icon:'', class: ''},
    {path: '/promotions', title:'Promotions', icon:'', class: ''},
    {path: '/top-products', title:'Top 10 Products', icon:'', class: ''},
    {path: '/top-orders', title:'Top 10 Orders', icon:'', class: ''},

];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    public menuItems: any[];
    public isCollapsed = true;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.router.events.subscribe((event) => {
            this.isCollapsed = true;
        });
    }
}
