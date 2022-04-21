import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../model/movies.model';
import { AppService } from './../app.service';
import { Genre } from './../model/genre.model';
import { AppConstants } from './../app.constants';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  form: FormGroup;
  genreList: Genre[] = [];
  error: boolean;
  movie: Movies = new Movies();
  movieId: number;
  message: string;

  constructor(private fb: FormBuilder, private appService: AppService, private route: ActivatedRoute,
    public appConstants: AppConstants) { }

  async ngOnInit() {
    this.appService.getGenres().subscribe((data: any) => {
      if (data && data.List && data.List.length > 0) {
        this.genreList = data.List;
      }

      const id: number = this.route.snapshot.params.id;
      if (id) { this.getMovie(id); }
      else { this.setFormGroup(); }

    })
  }

  private async getMovie(id: number) {
    this.movieId = id;
    this.appService.getMovie(id).subscribe((data: any) => {
      if (data && data.Data) {
        this.movie = data.Data;
      }
      this.setFormGroup();
    });
  }

  submit() {

    if (this.form.invalid) {
      this.error = true;
      return;
    }

    this.error = false;
    const formValue: Movies = this.form.value;

    if (this.movieId <= 0) {
      formValue.created_by = this.appConstants.loggedInUser.id;
      this.appService.insertMovie(formValue).subscribe((data: any) => {
        if (data && data.Data) {
          this.movie = data.Data;
          this.movieId = this.movie.id;
          this.setFormGroup();
        }
        this.message = 'Movie Updated Successfully';
      });
    } else {
      formValue.modified_by = this.appConstants.loggedInUser.id;
      formValue.id = this.movieId;

      this.appService.updatetMovie(formValue).subscribe((data: any) => {
        if (data && data.Data) {
          this.movie = data.Data;
          this.movieId = this.movie.id;
          this.setFormGroup();
        }
        this.message = 'Movie Updated Successfully';
      });

    }
  }


  private setFormGroup() {
    this.form = this.fb.group({
      director: [this.movie.director, Validators.required],
      genre: [this.movie.genre, Validators.required],
      _99popularity: [this.movie._99popularity, Validators.required],
      imdb_score: [this.movie.imdb_score, Validators.required],
      name: [this.movie.name, Validators.required]
    });
    this.form.patchValue({
      genre: this.movie.genre
    });
  }


  reset() {
    this.movieId = 0;
    this.message = '';
    this.form.reset();
  }

}
