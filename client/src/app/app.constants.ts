import { Injectable } from '@angular/core';
import { User } from './model/user.model';

@Injectable({ providedIn: 'root' })
export class AppConstants {

    public loggedInUser: User = new User();
    public accessToken: string = '';
    public isAdmin: boolean = false;

}