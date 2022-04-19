import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [

    { path: '', redirectTo: 'mmania', pathMatch: 'full' },
    {
        path: 'mmania',
        children: [
            {
                path: 'movies-list',
                loadChildren: () => import('src/app/movies-list/movies-list.module').then((m) => m.MoviesListModule),
            },
            {
                path: 'sorted-movies',
                loadChildren: () => import('src/app/sorted-movies/sorted-movies.module').then((m) => m.SortedMoviesModule),
            },
            {
                path: 'genre-filter',
                loadChildren: () => import('src/app/genre-filter/genre-filter.module').then((m) => m.GenreFilterModule),
            },
            {
                path: 'search-movies',
                loadChildren: () => import('src/app/search-movies/search-movies.module').then((m) => m.SearchMoviesModule),
            }
        ]
    }
]
