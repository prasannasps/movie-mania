import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from './app.constants';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private router: Router, private appConstants: AppConstants) {

    if (window.localStorage.getItem("accessToken")) {
      this.appConstants.accessToken = window.localStorage.getItem("accessToken") || '';
      this.appConstants.loggedInUser.id = Number(window.localStorage.getItem("loggedInUserid"));
      this.appConstants.loggedInUser.name = window.localStorage.getItem("loggedInUsername") || '';
      this.appConstants.isAdmin = true;
    }

    router.navigateByUrl('mmania/movies-list')
  }
}
