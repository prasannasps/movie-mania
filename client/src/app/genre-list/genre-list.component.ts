import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../app.service';
import { Genre } from '../model/genre.model';
import { Router } from '@angular/router';
import { AppConstants } from './../app.constants';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  genres: Genre[];
  dataSource = new MatTableDataSource<Genre>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private appService: AppService, private router: Router, public appConstants: AppConstants) { }

  ngOnInit(): void {
    this.search();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  search() {
    this.appService.getGenres().subscribe((data: any) => {
      if (data && data.List && data.List.length > 0) {
        this.dataSource = new MatTableDataSource<Genre>(data.List);
        this.dataSource.paginator = this.paginator;
      }
    })
  }

  addNewGenre(genreId?: number) {

    this.router.navigateByUrl('/mmania/add-genre');

  }

}
