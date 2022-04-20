import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AppService {

    constructor(private httpClient: HttpClient) { }

    public getMovies() {
        return this.httpClient.get(`http://localhost:5000/api/movies-all`);
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

}