import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Movies } from '../model/movies.model';
import { AppService } from './../app.service';
import { Router } from '@angular/router';
import { AppConstants } from './../app.constants';

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

  constructor(private appService: AppService, private router: Router, public appConstants: AppConstants) {
    if (appConstants.loggedInUser.id) {
      this.displayedColumns.push(...['edit', 'delete']);
    }
  }

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

  editMovie(movie: Movies) {
    this.router.navigateByUrl('/mmania/add-movie/' + movie.id || '0');
  }

  addNewMovie() {
    this.router.navigateByUrl('/mmania/add-movie/0');
  }

  deleteMovie(movie: Movies) {
    this.appService.deleteMovie(movie.id || 0).subscribe((data: any) => {
      if (data && data.List && data.List.length > 0) {
        this.dataSource = new MatTableDataSource<Movies>(data.List);
        this.dataSource.paginator = this.paginator;
      }
    })
  }

}
