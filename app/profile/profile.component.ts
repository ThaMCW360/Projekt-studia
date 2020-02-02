import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormGroup, FormControl } from '@angular/forms';

import { RouterOutlet, Router } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {User} from '../user';
 import { fromEvent } from 'rxjs/observable/fromEvent';
  import { pluck } from 'rxjs/operators';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
users : User[];
  constructor(private loginService: LoginService, private router:Router) {}
  selectedFile: File;
  img_src = localStorage.getItem('image');
  qwe = ":)";
  fl = 0;
  itb;
  logged;
  modelForm;

  user = {city: '',
          login: '',
          mail: ''};

getUsers() : void{
this.users = this.loginService.getUsers();
}



dataURItoBlob(dataURI) {
   const byteString = window.atob(dataURI);
   const arrayBuffer = new ArrayBuffer(byteString.length);
   const int8Array = new Uint8Array(arrayBuffer);
   for (let i = 0; i < byteString.length; i++) {
     int8Array[i] = byteString.charCodeAt(i);
   }
   const blob = new Blob([int8Array], { type: 'image/jpeg' });    
   return blob;
}




  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
   
      const fileReader = new FileReader();
      let imageToUpload =  this.selectedFile;
      this.itb = this.imageToBase64(fileReader, imageToUpload)
        .subscribe(base64image => {
          // do something with base64 image..
          localStorage.setItem('image', base64image);
          this.router.navigateByUrl("/login");
          const date = new Date().valueOf();
let text = '';
const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (let i = 0; i < 5; i++) {
   text += possibleText.charAt(Math.floor(Math.random() *    possibleText.length));
}
const imageName = date + '.' + text + '.jpeg';
const imageBlob = this.dataURItoBlob(base64image);
const imageFile = new File([imageBlob], imageName, { type: 'image/jpeg' });
          
this.img_src = base64image;
      });
        
  

        this.qwe = localStorage.getItem('image');
        this.img_src = localStorage.getItem('image');

  }

  imageToBase64(fileReader: FileReader, fileToRead: File): Observable<string> {
    fileReader.readAsDataURL(fileToRead);
    return fromEvent(fileReader, 'load').pipe(pluck('currentTarget', 'result'));
  }

  onSubmit(form) : void {

    localStorage.setItem('login', form.value.login);
    this.user.login = localStorage.getItem('login');
    localStorage.setItem('mail', form.value.mail);
    this.user.mail = localStorage.getItem('mail');
    localStorage.setItem('city', form.value.city);
    this.user.city = localStorage.getItem('city');

};


ngOnInit(): void{

	this.getUsers();
if(localStorage.getItem('logged')=="1"){
  this.logged = 1;
} else {
  this.logged = 0;
  this.router.navigateByUrl("/login");
}


if(!localStorage.getItem('image')){

this.img_src = "./no-image.png";

}

if(!localStorage.getItem('login')){
    this.user.login = this.users[0].login;
    localStorage.setItem('login', this.user.login);
} else {
  this.user.login = localStorage.getItem('login');
}
if(!localStorage.getItem('city')){
    this.user.city = this.users[0].city;
    localStorage.setItem('city', this.user.city);
} else {

  this.user.city = localStorage.getItem('city');
}

if(!localStorage.getItem('mail')){
    this.user.mail = this.users[0].mail;
    localStorage.setItem('mail', this.user.mail);
} else {
  
  this.user.mail = localStorage.getItem('mail');
}




 this.modelForm = new FormGroup({
   login: new FormControl(this.user.login),

   city: new FormControl(this.user.city),
   mail: new FormControl(this.user.mail),
 });



}

}

