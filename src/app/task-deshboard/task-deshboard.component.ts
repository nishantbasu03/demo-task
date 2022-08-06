import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from './common.service';

@Component({
  selector: 'app-task-deshboard',
  templateUrl: './task-deshboard.component.html',
  styleUrls: ['./task-deshboard.component.scss']
})
export class TaskDeshboardComponent implements OnInit{
  public isEnablePopup:boolean = false;
  public taskDeshoardList:any = {
    data : [
      {
        status : 1,
        noOfTask : 1,
        taskList:[
          {
            id: 1,
            title : 'Design',
            description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            priority: 1,
            fileSource: ''
          }
        ]
      },
      {
        status : 2,
        noOfTask : 1,
        taskList:[
          {
            id: 2,
            title : 'Development',
            description : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            priority: 2,
            fileSource: ''
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
  private isAddItemSubscription: Subscription | undefined;
  public taskCount:any = 3;

  constructor(private router: Router,
    private commonService: CommonService){}

  ngOnInit(){
    this.getCreatedTask();
  }


  getCreatedTask(){
    this.isAddItemSubscription = this.commonService.addItemObservable.subscribe((item)=>{
      if(item && Object.keys(item).length > 0){
        if(item.title){
          this.taskCount += 1;
          this.taskDeshoardList.data.map((tasklist:any) => {
            if(tasklist.status == 1){
              tasklist.noOfTask += 1;
              tasklist.taskList.push(item);
            }
          })
        }
      }
    });
  }

  createTask(data:any){
    if(data == 1){
      this.router.navigate(['/task-deshboard/create-task'], { queryParams: { id: this.taskCount}});
    }else{
      this.isEnablePopup = true;
    }
  }

  closePopup(){
    this.isEnablePopup = false;
  }

  onTaskStatusChanges(data:any){
    this.taskDeshoardList = data;
    this.isEnablePopup = false;
    console.log(this.taskDeshoardList);
  }

  ngOnDestroy(){
    if(this.isAddItemSubscription){
        this.isAddItemSubscription.unsubscribe();
    }
  }

}