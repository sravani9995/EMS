import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprintsRoutingModule } from './sprints-routing.module';
import { SprintsComponent } from './sprints.component';
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
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [
    SprintsComponent
  ],
  imports: [
    CommonModule,
    SprintsRoutingModule,
    FormsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    // MatDatepickerModule
  ]
})
export class SprintsModule { }
