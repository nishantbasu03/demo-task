import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { TaskDeshboardComponent } from "./task-deshboard.component";

const taskRoutes: Routes = [
    { path: '', component: TaskDeshboardComponent },
    { path: 'create-task', component: CreateTaskComponent },
]

@NgModule({
    imports: [RouterModule.forChild(taskRoutes)],
    exports: [RouterModule]
})

export class TaskDeshboardRoutingModule{}