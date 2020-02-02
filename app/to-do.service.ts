import { Injectable } from '@angular/core';

export interface toDoModel {  
  id:number;
  name:string;
  desc:string;
  status:string;
}

@Injectable()
export class ToDoService {

  constructor() { }

  toDoList:Array<toDoModel> = [{
    id: 1,
    name: 'zakupy',
    desc: 'Pójść na zakupy',
    status: '1'
  }];


 getToDoList(): toDoModel[] {
  return this.toDoList;
// console.log(q);

    }


}
