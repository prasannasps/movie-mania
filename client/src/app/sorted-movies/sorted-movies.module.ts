import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortedMoviesComponent } from './sorted-movies.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SortedMoviesComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SortedMoviesComponent }
    ])
  ]
})
export class SortedMoviesModule { }
