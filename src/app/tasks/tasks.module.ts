import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

import { TasksRoutingModule } from './tasks-routing.module';
import { FormsModule } from '@angular/forms';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {CdkTableModule} from '@angular/cdk/table';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { TasksComponent } from './tasks.component';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    // Component,
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    MatProgressBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    MatSelectModule,
    MatDatepickerModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TasksModule { }
