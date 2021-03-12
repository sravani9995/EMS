import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: "", component: AdminComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () => import('.././dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: "user",
        loadChildren: () => import('.././user/user.module').then(m => m.UserModule)
      },
      {
        path: "role",
        loadChildren: () => import('.././role/role.module').then(m => m.RoleModule)
      },
      {
        path: "project",
        loadChildren: () => import('.././project/project.module').then(m => m.ProjectModule)
      },
      {
        path: "module",
        loadChildren: () => import('.././module/module.module').then(m => m.ModuleModule)
      },
      {
        path: "submodule",
        loadChildren: () => import('.././submodule/submodule.module').then(m => m.SubmoduleModule)
      },
      {
        path: "sprints",
        loadChildren: () => import('.././sprints/sprints.module').then(m => m.SprintsModule)
      },
      {
        path: "tasks",
        loadChildren: () => import('.././tasks/tasks.module').then(m => m.TasksModule)
      },
      {
        path: "responsibilites",
        loadChildren: () => import('.././responsibilites/responsibilites.module').then(m => m.ResponsibilitesModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
