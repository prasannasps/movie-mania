import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Movies } from '../model/movies.model';
import { AppService } from './../app.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit, AfterViewInit {

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
