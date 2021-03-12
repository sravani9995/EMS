import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {CdkTableModule} from '@angular/cdk/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { UserComponent } from './user/user.component';
// import { RoleComponent } from './role/role.component';
// import { ProjectComponent } from './project/project.component';
//import { AdminComponent } from './admin/admin.component';
// import { ModuleComponent } from './module/module.component';
// import { SubmoduleComponent } from './submodule/submodule.component';
// import { SprintsComponent } from './sprints/sprints.component';
import { TasksComponent } from './tasks/tasks.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
// import { DashboardComponent } from './dashboard/dashboard.component';
import {MatInputModule} from '@angular/material/input';
import { ResponsibilitesComponent } from './responsibilites/responsibilites.component';

@NgModule({
  declarations: [
  AppComponent,
    HomeComponent,
    // ResponsibilitesComponent,
    // UserComponent,
    // RoleComponent,
    // ProjectComponent,
  //  AdminComponent,
    // ModuleComponent,
    // SubmoduleComponent,
    // SprintsComponent,
    // TasksComponent,
    // DashboardComponent,
  ],
  imports: [
    MatCardModule,
    CdkTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
     MatButtonModule,
     MatTooltipModule,
     MatTableModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
