import { Component, OnInit } from '@angular/core';
import { ToDoService, toDoModel } from '../to-do.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

toDoThing;
modelForm;
formCtrl;

  constructor(private toDoService: ToDoService) { }

getToDoList() : void{
this.toDoThing = this.toDoService.getToDoList();

}

toDoList = [];

  thing = {name: '',
           desc: '',
           status: '',
           nameId: '',
       		id: ''};

  submit(form) : void {

	let qwe = form.value;
	  let arr = [];
  for(let key in qwe){
   if(qwe.hasOwnProperty(key)){
     arr.push(qwe[key]);
   }
  }
this.toDoList = arr;


localStorage.setItem("todo", JSON.stringify(arr));


}

addClick() : void{

	this.toDoList.push({name: '',
           desc: '',
           status: '',
           nameId: '',
       		id: ''}); 

}

deleteClick(index) : void{
this.toDoList.splice(index,1);
}

  ngOnInit() {
  	this.getToDoList();
  	this.toDoList = this.toDoThing;


this.toDoList = JSON.parse(localStorage.getItem("todo"));

if(!this.toDoList){
	this.toDoList =  [{name: '', desc: '', status: ''}];
	localStorage.setItem("todo", JSON.stringify(this.toDoList));
}

  }







}
