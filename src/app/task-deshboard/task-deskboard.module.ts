import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonService } from "./common.service";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { TaskDeshboardRoutingModule } from "./task-deshboard-routing.module";
import { TaskDeshboardComponent } from "./task-deshboard.component";


@NgModule({
    declarations: [
        TaskDeshboardComponent,
        CreateTaskComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TaskDeshboardRoutingModule
    ],
    providers: [CommonService]
})

export class TaskDeshboardModule{}