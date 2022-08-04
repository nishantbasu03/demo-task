import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-deshboard',
  templateUrl: './task-deshboard.component.html',
  styleUrls: ['./task-deshboard.component.scss']
})
export class TaskDeshboardComponent {
  public taskDeshoardList:any = {
    data : [
      {
        status : 1,
        noOfTask : 1,
        taskList:[
          {
            title : 'Design',
            description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            priority: 1,
            image: ''
          }
        ]
      },
      {
        status : 2,
        noOfTask : 1,
        taskList:[
          {
            title : 'Development',
            description : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            priority: 2,
            image: ''
          }
        ]
      },
      {
        status : 3,
        noOfTask : 0,
        taskList:[]
      }
    ]
  }

  constructor(private router: Router){}

  createTask(data:any){
    if(data == 1){
      this.router.navigate(['/task-deshboard/create-task']);
    }
  }


}
