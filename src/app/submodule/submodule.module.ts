import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmoduleRoutingModule } from './submodule-routing.module';
import { SubmoduleComponent } from './submodule.component';
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
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    SubmoduleComponent
  ],
  imports: [
    CommonModule,
    SubmoduleRoutingModule,
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
    MatInputModule,
    MatSelectModule
  ]
})
export class SubmoduleModule { }
