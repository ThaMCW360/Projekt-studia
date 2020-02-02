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

})
export class LoginComponent implements OnInit {

	login = {login:"",
			passwd:""};
logged;
error;


    constructor(private loginService: LoginService, private router:Router) {

    	var q = ":(";

  	}


	getUsers(login, passwd) : void{
		var user = this.loginService.getUsers()[0];

		if(user.login.toLowerCase()==login.toLowerCase() && user.passwd == passwd){
			console.log(":)");
			localStorage.setItem('logged', '1');
      this.logged = 1;
      this.router.navigateByUrl("/profile");
		} else {
      this.error = "Błędne dane, spróbuj ponownie";
		}
	}

  	onSubmit() {
    	this.getUsers(this.login.login, this.login.passwd);
  	}

  	ngOnInit() {
if(localStorage.getItem('logged')=="1"){
  this.logged = 1;
} else {
  this.logged = 0;
}



  		if(localStorage.getItem('logged')=="1"){
  			
			this.router.navigateByUrl("/profile");
  		}
  	

  	}

}
