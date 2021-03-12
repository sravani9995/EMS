import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
// import { BrowserModule } from '@angular/platform-browser';
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
import { ProjectComponent } from './project.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    // BrowserModule,
    FormsModule,
    // BrowserAnimationsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectModule { }
