import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {

    public imageSrc:any;
    public taskForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      file: new FormControl('', [Validators.required]),
      fileSource: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      priority: new FormControl('', [Validators.required]),
      id: new FormControl(0, [Validators.required])
    });

    constructor(private router: Router,
      private commonService: CommonService,
      private activatedRoute: ActivatedRoute){}

    
    ngOnInit() {
      let taskId = this.activatedRoute.snapshot.queryParams["id"];
      if(taskId){
        this.taskForm.patchValue({id: taskId});
      }
    }

    onFileChange(event:any) {
      const reader = new FileReader();
      if(event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.imageSrc = reader.result as string;
          this.taskForm.patchValue({
            fileSource: reader.result
          });
        };
      }
    }

  submit(){
    console.log(this.taskForm.value);
    this.commonService.addItem = this.taskForm.value;
    this.commonService.setItem();
    this.router.navigate(['/task-deshboard']);
  }
}