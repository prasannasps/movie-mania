import { Injectable } from '@angular/core';
import { User } from './model/user.model';

@Injectable({ providedIn: 'root' })
export class AppConstants {

    public loggedInUser: User;
    public accessToken: string;

}