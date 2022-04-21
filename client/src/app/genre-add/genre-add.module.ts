import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreAddComponent } from './genre-add.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GenreAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: GenreAddComponent }
    ])
  ]
})
export class GenreAddModule { }
