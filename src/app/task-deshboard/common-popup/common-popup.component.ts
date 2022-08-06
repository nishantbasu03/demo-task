import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'common-popup',
  templateUrl: './common-popup.component.html',
  styleUrls: ['./common-popup.component.scss']
})
export class CommonPopupComponent implements OnInit {
  @Input() taskDetailList:any;
  @Output() isClosePopup: EventEmitter<any> = new EventEmitter<any>();
  @Output() isTaskStatusChange: EventEmitter<any> = new EventEmitter<any>();
  public duplicateTaskDetailList:any;

    constructor( private commonService: CommonService){}

    ngOnInit(){
      this.duplicateTaskDetailList = JSON.parse(JSON.stringify(this.taskDetailList));
    }

    onChangeTaskStatus(taskDetail:any,currentStatus:any,changeStatus:any){
      this.duplicateTaskDetailList.data.map((taskList:any)=>{
        if(taskList.status == currentStatus){
          let index: number = taskList.taskList.indexOf(taskDetail);
          taskList.taskList.splice(index, 1);
          taskList.noOfTask -= 1;
        }else if(taskList.status == changeStatus){
          taskList.taskList.push(taskDetail);
          taskList.noOfTask += 1;
        }
      });
      console.log(this.duplicateTaskDetailList);
    }

    onSave(){
      this.taskDetailList = this.duplicateTaskDetailList;
      this.isTaskStatusChange.emit(this.taskDetailList);
    }

    onClose(){
      this.isClosePopup.emit();
    }
}