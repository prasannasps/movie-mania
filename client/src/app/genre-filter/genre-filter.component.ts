import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../app.service';
import { Movies } from '../model/movies.model';

@Component({
  selector: 'app-genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrls: ['./genre-filter.component.css']
})
export class GenreFilterComponent implements OnInit {

  displayedColumns: string[] = ['name', 'director', 'imdb_score', '_99popularity', 'genre'];
  movies: Movies[];
  dataSource = new MatTableDataSource<Movies>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.search();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  search() {
    this.appService.getMovies().subscribe((data: any) => {
      if (data && data.List && data.List.length > 0) {
        this.dataSource = new MatTableDataSource<Movies>(data.List);
        this.dataSource.paginator = this.paginator;
      }
    })
  }

}
