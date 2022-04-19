import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../app.service';
import { Movies } from '../model/movies.model';

@Component({
  selector: 'app-sorted-movies',
  templateUrl: './sorted-movies.component.html',
  styleUrls: ['./sorted-movies.component.css']
})
export class SortedMoviesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'director', 'imdb_score', '_99popularity', 'genre'];
  movies: Movies[];
  dataSource = new MatTableDataSource<Movies>([]);
  sortableFilters: any[] = [{ key: '_99popularity', value: 'Popularity', selected: false },
  { key: 'director', value: 'Director', selected: false },
  { key: 'name', value: 'Movie Name', selected: false }];

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
        this.movies = data.List;
        this.dataSource = new MatTableDataSource<Movies>(this.movies);
        this.ngAfterViewInit();
      }
    })
  }

  public filterHandler(sortableFilter: any) {
    this.sortableFilters.forEach(filter => filter.selected = false);
    sortableFilter.selected = true;
    this.sortMovies(sortableFilter.key);
  }

  private sortMovies(key: string) {
    if (key === '_99popularity') {
      this.movies.sort((a: any, b: any) => a[key] - b[key]);
    }
    else {
      this.movies.sort((a: any, b: any) => a[key].localeCompare(b[key]));
    }
    this.dataSource = new MatTableDataSource<Movies>(this.movies);
    this.dataSource.paginator = this.paginator;
    this.ngAfterViewInit();
  }
}
