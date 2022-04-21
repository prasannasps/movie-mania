import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./model/user.model";

@Injectable({ providedIn: 'root' })
export class AuthService {

    localUrl: string = 'http://localhost:3000/';
    remoteUrl: string = 'https://movie-mania-12.herokuapp.com/';

    currentUrl: string;

    constructor(private http: HttpClient) {
        this.currentUrl = this.remoteUrl;
    }

    login(emailid: string, password: string) {
        return this.http.post<User>(this.currentUrl + 'api/login', { emailid: emailid, password: password });
    }
}