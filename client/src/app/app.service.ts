import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AppService {

    constructor(private httpClient: HttpClient) { }

    public getMovies() {
        return this.httpClient.get(`http://localhost:5000/mmania/movies-all`);
    }

}