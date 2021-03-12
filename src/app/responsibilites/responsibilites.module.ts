import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsibilitesRoutingModule } from './responsibilites-routing.module';
import { ResponsibilitesComponent } from './responsibilites.component';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ResponsibilitesComponent
  ],
  imports: [
    CommonModule,
    ResponsibilitesRoutingModule,
    FormsModule,
    MatProgressBarModule,
    MatTableModule,
    MatToolbarModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ResponsibilitesModule { }
