import { Component, OnInit } from '@angular/core';
import { ToDoService, toDoModel } from '../to-do.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
// toDoThing : toDoModel[];
toDoThing;
modelForm;
formCtrl;
i;

  constructor(private toDoService: ToDoService) { }

getToDoList() : void{
this.toDoThing = this.toDoService.getToDoList();
console.log(this.toDoThing);
}

toDoList = [];

  thing = {name: '',
           desc: '',
           status: '',
           nameId: '',
       		id: ''};

  submit(form) : void {
  //   // localStorage.setItem('name', form.value.name);
  //   this.thing.name = localStorage.getItem('name');
  //   // localStorage.setItem('desc', form.value.desc);
  //   this.thing.desc = localStorage.getItem('desc');
  //   // localStorage.setItem('status', form.value.status);
  //   this.thing.status = localStorage.getItem('status');

    //     // localStorage.setItem('name', form.value.name);
    // this.thing.name = "qq";
    // // localStorage.setItem('desc', form.value.desc);
    // this.thing.desc = "ww";
    // // localStorage.setItem('status', form.value.status);
    // this.thing.status = "1";

// this.toDoList = form.value;
// this.toDoList
  console.log(form.value)
  console.log(this.toDoList.length);
	// for(this.i=0; this.i<this.toDoList.length; this.i++){
	// 	this.toDoList[this.i] = form.value.data+this.i;
	// }
	let qwe = form.value;
	  let arr = [];
  for(let key in qwe){
   if(qwe.hasOwnProperty(key)){
     arr.push(qwe[key]);
   }
  }
this.toDoList = arr;

	console.log(arr);


    // localStorage.setItem('todo', arr);
localStorage.setItem("todo", JSON.stringify(arr));


}

addClick() : void{
	this.toDoList.push({name: '',
           desc: '',
           status: '',
           nameId: '',
       		id: ''}); 

// this.toDoList.push({});
console.log(this.toDoList);

// console.log(this.toDoList);
}

deleteClick(index) : void{
	// this.toDoList[index] = {};
this.toDoList.splice(index,1);
}

  ngOnInit() {
  	this.getToDoList();
  	this.toDoList = this.toDoThing;
  console.log(this.toDoList);

this.toDoList = JSON.parse(localStorage.getItem("todo"));
if(!localStorage.getItem("todo")){
localStorage.setItem("todo", "{name: ''}");
}
console.log(JSON.parse(localStorage.getItem("todo")));

	 // this.modelForm = new FormGroup({
	 //   nameId: new FormControl("1"),
	 //   desc: new FormControl(this.thing.desc),
	 //   status: new FormControl(this.thing.status)
	 // });

// this.toDoThing[0] = {nameId: "name"+this.toDoThing[0].id}
	console.log(this.toDoThing);
  
console.log(this.toDoThing.length);
// for(i=0; i<this.toDoThing.length; i++){
// 	this.tmp = {
// 	   nameId+this.toDoThing[i].id: new FormControl("1"),
// 	   desc+this.toDoThing[i].id: new FormControl(this.thing.desc),
// 	   status+this.toDoThing[i].id: new FormControl(this.thing.status)
// 	 }
// this.formCtrl = Object.assign(this.formCtrl, this.tmp);
// 	// this.toDoThing[i]
// }


// console.log(this.formCtrl);

  }







}
