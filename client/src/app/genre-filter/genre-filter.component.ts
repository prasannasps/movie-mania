import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AppService } from '../app.service';
import { Genre } from '../model/genre.model';
import { Movies } from '../model/movies.model';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrls: ['./genre-filter.component.css']
})
export class GenreFilterComponent implements OnInit {

  displayedColumns: string[] = ['name', 'director', 'imdb_score', '_99popularity', 'genre'];
  movies: Movies[];
  genres: Genre[] = [];
  dataSource = new MatTableDataSource<Movies>([]);

  separatorKeysCodes: number[] = [ENTER, COMMA];
  genreCtrl = new FormControl();
  filteredGenres: Observable<string[]>;
  selectedGenres: string[] = [];

  @ViewChild('genreInput') genreInput: ElementRef<HTMLInputElement>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private appService: AppService) {
    this.filteredGenres = this.genreCtrl.valueChanges.pipe(
      startWith(null),
      map((genre: string | null) => (genre ? this._filter(genre) : this.genres.slice().map(genre => genre.name))),
    );
  }

  ngOnInit(): void {
    this.search();
    this.getGenres();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  search() {
    this.appService.searchMoviesOnGenre(this.selectedGenres).subscribe((data: any) => {
      if (data && data.List) {
        this.dataSource = new MatTableDataSource<Movies>(data.List || []);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  private getGenres() {

    this.appService.getGenres().subscribe((data: any) => {
      if (data && data.List && data.List.length > 0) {
        this.genres = data.List;
      }
    });

  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our genre
    if (value && !this.selectedGenres.includes(value)) {
      this.selectedGenres.push(value);
      this.selectedGenres = [...new Set(this.selectedGenres)];
    }

    // Clear the input value
    event.chipInput!.clear();

    this.genreCtrl.setValue(null);
    this.search();

  }

  remove(genre: string): void {
    const index = this.selectedGenres.indexOf(genre);

    if (index >= 0) {
      this.selectedGenres.splice(index, 1);
    }
    this.search();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedGenres.push(event.option.viewValue);
    this.selectedGenres = [...new Set(this.selectedGenres)];
    this.genreInput.nativeElement.value = '';
    this.genreCtrl.setValue(null);
    this.search();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.genres.filter(genre => genre.name.toLowerCase().includes(filterValue)).map(genre => genre.name);
  }

}
