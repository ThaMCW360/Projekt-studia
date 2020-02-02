import { Injectable } from '@angular/core';
// import { HttpClient, HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {User} from './user';

// export interface User {  
//   id:number;
//   login:string;
//   passwd:string;
// }


@Injectable()
export class LoginService {

  // constructor() { }
  users:Array<User> = [{
    id: 1,
    login: 'admin',
    passwd: 'admin',
    city: 'Koszalin',
    mail: 'test@wp.pl',
    gender: '1'
  }];


  private qs  = []; 
 getUsers(): User[] {
  return this.users;
// console.log(q);

    }

}
