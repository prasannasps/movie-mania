import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Movies } from './model/movies.model';

@Injectable({ providedIn: 'root' })
export class AppService {

    localUrl: string = 'http://localhost:3000/';
    remoteUrl: string = 'https://movie-mania-12.herokuapp.com/';

    currentUrl: string;

    constructor(private httpClient: HttpClient) {
        this.currentUrl = this.remoteUrl;
    }

    public getMovies() {
        return this.httpClient.get(this.currentUrl + `api/movies-all`);
    }

    public getMovie(id: number) {
        return this.httpClient.get(this.currentUrl + `api/movie`,
            {
                params: {
                    id: id
                }
            });
    }

    public searchMovies(searchKey: string) {
        return this.httpClient.get(this.currentUrl + `api/movies-search`,
            {
                params: {
                    search_key: searchKey
                }
            });
    }

    public searchMoviesOnGenre(genres: string[]) {
        return this.httpClient.post(this.currentUrl + `api/movies-genre-search`, { genres: genres });
    }

    public getGenres() {
        return this.httpClient.get(this.currentUrl + `api/genres-all`);
    }

    public insertMovie(movie: Movies) {
        return this.httpClient.post(this.currentUrl + `api/movie-insert`, { movie: movie });
    }

    public updatetMovie(movie: Movies) {
        return this.httpClient.post(this.currentUrl + `api/movie-update`, { movie: movie });
    }

}