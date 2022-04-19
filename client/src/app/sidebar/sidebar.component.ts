import { Component, OnInit } from '@angular/core';
import { Event, Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'shared.service';
import { SidebarModel } from '../model/sidebar.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebars: SidebarModel[] = [];
  sharedSubscription: Subscription = new Subscription;
  loading: boolean = false;

  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.routerEvent();
    this.sidebars = [{
      url: '/mmania/movies-list',
      display: 'Movies',
      icon_class: 'home'
    },
    {
      url: '/mmania/sorted-movies',
      display: 'Sorted Movies',
      icon_class: 'search'
    },
    {
      url: '/mmania/genre-filter',
      display: 'Genre Filter',
      icon_class: 'favorites'
    },
    {
      url: '/mmania/search-movies',
      display: 'Search Movies',
      icon_class: 'search-movies'
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

  ngOnDestroy() {
    if (this.sharedSubscription) {
      this.sharedSubscription.unsubscribe();
    }
  }

}
