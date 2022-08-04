import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
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
        TaskDeshboardRoutingModule
    ],
    providers: []
})

export class TaskDeshboardModule{}