import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmoduleComponent } from './submodule.component';

const routes: Routes = [
  {path:'',component:SubmoduleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmoduleRoutingModule { }
