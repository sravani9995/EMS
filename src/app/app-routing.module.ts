import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ModuleComponent } from './module/module.component';
import { ProjectComponent } from './project/project.component';
import { ResponsibilitesComponent } from './responsibilites/responsibilites.component';
import { RoleComponent } from './role/role.component';
import { SprintsComponent } from './sprints/sprints.component';
import { SubmoduleComponent } from './submodule/submodule.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'project',component:ProjectComponent},
  {path:'role',component:RoleComponent},
  {path:'home',component:HomeComponent},
  {path:"",redirectTo:"/home",pathMatch:'full'},
  {path:'admin',component:AdminComponent},
  {path:'user',component:UserComponent},
  // {path:'',redirectTo:"/user",pathMatch:'full'},
  {path:'role',component:RoleComponent},
  {path:'project',component:ProjectComponent},
  {path:'module',component:ModuleComponent},
  {path:'submodule',component:SubmoduleComponent},
  {path:'sprints',component:SprintsComponent},
  {path:'tasks',component:TasksComponent},
  {path:'responsibilites',component:ResponsibilitesComponent},
   {
     path:"admin",
   loadChildren:()=>import('../app/admin/admin.module').then(m=>m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
