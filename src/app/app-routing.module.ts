import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  { path: "", redirectTo: "task-deshboard", pathMatch: "full" },
  {
    path: "task-deshboard",
    loadChildren: () => import('./task-deshboard/task-deskboard.module').then(m => m.TaskDeshboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
