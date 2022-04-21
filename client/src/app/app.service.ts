import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Movies } from './model/movies.model';

@Injectable({ providedIn: 'root' })
export class AppService {

    constructor(private httpClient: HttpClient) { }

    public getMovies() {
        return this.httpClient.get(`http://localhost:5000/api/movies-all`);
    }

    public getMovie(id: number) {
        return this.httpClient.get(`http://localhost:5000/api/movie`,
            {
                params: {
                    id: id
                }
            });
    }

    public searchMovies(searchKey: string) {
        return this.httpClient.get(`http://localhost:5000/api/movies-search`,
            {
                params: {
                    search_key: searchKey
                }
            });
    }

    public searchMoviesOnGenre(genres: string[]) {
        return this.httpClient.post(`http://localhost:5000/api/movies-genre-search`, { genres: genres });
    }

    public getGenres() {
        return this.httpClient.get(`http://localhost:5000/api/genres-all`);
    }

    public insertMovie(movie: Movies) {
        return this.httpClient.post(`http://localhost:5000/api/movie-insert`, { movie: movie });
    }

    public updatetMovie(movie: Movies) {
        return this.httpClient.post(`http://localhost:5000/api/movie-update`, { movie: movie });
    }

}