import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchMoviesComponent } from './search-movies.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchMoviesComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SearchMoviesComponent }
    ])
  ]
})
export class SearchMoviesModule { }
