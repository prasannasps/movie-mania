import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieAddComponent } from './movie-add.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MovieAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: MovieAddComponent }
    ])
  ]
})
export class MovieAddModule { }
