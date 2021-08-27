import {Injectable,EventEmitter} from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class SharedService {
    roleStateEvent = new EventEmitter<any>();

}
