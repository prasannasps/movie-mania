import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreListComponent } from './genre-list.component';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    GenreListComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: GenreListComponent }
    ])
  ]
})
export class GenreListModule { }
