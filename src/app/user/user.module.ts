import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {CdkTableModule} from '@angular/cdk/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    // BrowserAnimationsModule,
    // BrowserModule,
    FormsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule,
    MatTooltipModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class UserModule { }
