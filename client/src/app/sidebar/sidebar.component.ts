import { Component, OnInit } from '@angular/core';
import { Event, Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'shared.service';
import { SidebarModel } from '../model/sidebar.model';
import { filter } from 'rxjs/operators';
import { AppConstants } from './../app.constants';
import { User } from './../model/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebars: SidebarModel[] = [];
  sharedSubscription: Subscription = new Subscription;
  loading: boolean = false;

  constructor(private router: Router, private sharedService: SharedService, public appConstant: AppConstants) { }

  ngOnInit(): void {
    this.routerEvent();
    this.sidebars = [{
      url: '/mmania/movies-list',
      display: 'Movies',
    },
    {
      url: '/mmania/sorted-movies',
      display: 'Sorted Movies',
    },
    {
      url: '/mmania/genre-filter',
      display: 'Genre Filter',
    },
    {
      url: '/mmania/search-movies',
      display: 'Search Movies',
    },
    {
      url: '/mmania/genre-list',
      display: 'Genre List',
    }]

    this.sharedSubscription = this.sharedService.sharedMessage.subscribe((data: any) => {
      this.loading = data;
    });

  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

  private routerEvent() {
    this.router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
    ).subscribe((e: RouterEvent) => {
      if (e && e.url) {
        this.setURLSelection(e.url);
      }
    });
  }

  private setURLSelection(url: string) {
    this.sidebars.forEach(sidebar => {
      sidebar.selected = false;
      if (sidebar.url.includes(url)) {
        sidebar.selected = true;
      }
    })
  }

  public logout() {

    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("loggedInUsername");
    window.localStorage.removeItem("loggedInUserid");

    this.appConstant.accessToken = '';
    this.appConstant.loggedInUser = new User();

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/mmania/sorted-movies']);
    });

  }

  ngOnDestroy() {
    if (this.sharedSubscription) {
      this.sharedSubscription.unsubscribe();
    }
  }

}
