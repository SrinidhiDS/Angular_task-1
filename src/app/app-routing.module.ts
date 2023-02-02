import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildasubmitComponent } from './child-a/childasubmit/childasubmit.component';
import { ChildAComponent } from './child-a/child-a.component';
const newLocal = 'childa';
const routes: Routes = [
  {
    path:'SUBMIT', 
    component:ChildasubmitComponent
  },
  {
    path: 'childa',
    component:ChildAComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
