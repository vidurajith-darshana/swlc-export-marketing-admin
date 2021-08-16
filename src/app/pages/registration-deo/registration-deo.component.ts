import { Component, OnInit } from '@angular/core';
import {OperatorService} from '../service/admin-web-services/operator.service';

@Component({
  selector: 'app-registration-deo',
  templateUrl: './registration-deo.component.html',
  styleUrls: ['./registration-deo.component.css']
})
export class RegistrationDEOComponent implements OnInit {

  firstName : string;
  lastName : string;
  email : string;
  password : string;

  constructor(
      private operatorService : OperatorService
  ) { }

  ngOnInit(): void {
  }

  _createOperator(){
    let operator = {
      firstName : this.firstName,
      lastName : this.lastName,
      email : this.email,
      password : this.password,
      role : "ROLE_OPERATOR"
    }

    this.operatorService.createOperator(operator).subscribe((data)=>{
      if (data['success']){
        // success msg
        this._clearText();
      }else {
        // error msg
        alert(data['message'])
      }
    },error => {
      // error msg
    })
  }

  _clearText(){
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.password = "";
  }

}
