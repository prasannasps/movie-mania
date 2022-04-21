import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./model/user.model";

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private http: HttpClient) { }

    login(emailid: string, password: string) {
        return this.http.post<User>('http://localhost:5000/api/login', { emailid: emailid, password: password });
    }
}