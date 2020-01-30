import {  Component, OnInit, Input, Output } from '@angular/core';
import { LoginService } from '../login.service';
// import { HttpClientModule }    from '@angular/common/http';
import { RouterOutlet, Router } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // selector: 'app-hero-list',
  // providers: [LoginService]
})
export class LoginComponent implements OnInit {

	login = {login:"",
			passwd:""};
logged;


    constructor(private loginService: LoginService, private router:Router) {

    	var q = ":(";

  	}


	getUsers(login, passwd) : void{
		var user = this.loginService.getUsers()[0];
		// console.log(qw);
		if(user.login==login && user.passwd == passwd){
			console.log(":)");
			localStorage.setItem('logged', '1');
      this.logged = 1;
      this.router.navigateByUrl("/profile");
		} else {
			console.log(":(");
		}
	}

  	onSubmit() {
    	// console.log(login.name);
    	this.getUsers(this.login.login, this.login.passwd);
  	}

  	ngOnInit() {
		// console.log(this.q);
  		// var login = {name: "qwe"};
if(localStorage.getItem('logged')=="1"){
  this.logged = 1;
} else {
  this.logged = 0;
}



  		if(localStorage.getItem('logged')=="1"){
  			
			this.router.navigateByUrl("/profile");
  		}
  	console.log(localStorage.getItem('logged'));

  	}

}