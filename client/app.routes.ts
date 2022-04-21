import { Routes } from '@angular/router';
import { LoginComponent } from './src/app/login/login.component';

export const APP_ROUTES: Routes = [

    { path: '', redirectTo: 'mmania/movies-list', pathMatch: 'full' },
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
            },
            {
                path: 'genre-list',
                loadChildren: () => import('src/app/genre-list/genre-list.module').then((m) => m.GenreListModule),
            },
            {
                path: 'add-genre',
                loadChildren: () => import('src/app/genre-add/genre-add.module').then((m) => m.GenreAddModule),
            },
            {
                path: 'add-movie/:id',
                loadChildren: () => import('src/app/movie-add/movie-add.module').then((m) => m.MovieAddModule),
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    }
]
