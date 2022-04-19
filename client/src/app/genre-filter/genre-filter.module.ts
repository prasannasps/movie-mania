import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreFilterComponent } from './genre-filter.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GenreFilterComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: GenreFilterComponent }
    ])
  ]
})
export class GenreFilterModule { }
