import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../app.service';
import { Movies } from '../model/movies.model';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

  searchForm: FormGroup;

  displayedColumns: string[] = ['name', 'director', 'imdb_score', '_99popularity', 'genre'];
  dataSource = new MatTableDataSource<Movies>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private appService: AppService, private fb: FormBuilder) {
    this.setFormGroup();
  }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  search(inputValue?: string) {
    inputValue = inputValue || this.searchForm.get('input')?.value;

    this.appService.searchMovies(inputValue || '').subscribe((data: any) => {
      if (data && data.List) {
        this.dataSource = new MatTableDataSource<Movies>(data.List);
        this.dataSource.paginator = this.paginator;
      }
    })

  }

  setFormGroup() {
    this.searchForm = this.fb.group({
      input: new FormControl('')
    })
  }

}
