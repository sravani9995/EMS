import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponsibilitesComponent } from './responsibilites.component';

const routes: Routes = [
  {path:'',component:ResponsibilitesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsibilitesRoutingModule { }
