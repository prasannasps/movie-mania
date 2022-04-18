import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [

    { path: '', redirectTo: 'bewell', pathMatch: 'full' },
    {
        path: 'mmania',
        children: [
            {
                path: 'movies-list',
                loadChildren: () => import('src/app/movies-list/movies-list.module').then((m) => m.MoviesListModule),
            },
            // {
            //     path: 'favs',
            //     loadChildren: () => import('./favorites/favorites.module').then((m) => m.FavoritesModule),
            // },
            // {
            //     path: 'home',
            //     loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
            // },
            // {
            //     path: 'profile',
            //     loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
            // }
        ]
    }
]
