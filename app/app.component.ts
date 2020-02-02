import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { ToDoService } from './to-do.service';
// import { HttpClientModule }    from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {User} from './user';
// import {HttpClientModule} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService, ToDoService]
})
export class AppComponent{
  title = 'app works!';
  users : User[];
  constructor(private loginService: LoginService, private toDoService: ToDoService,) {
  }


logged = localStorage.getItem('logged');


getUsers() : void{
this.users = this.loginService.getUsers();

}

ngOnInit(): void{
	// this.getPersons();
	this.getUsers();
// isActive(url: "qwq", exact: 1);

}


}
