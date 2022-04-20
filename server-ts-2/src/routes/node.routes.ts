import { Application, Request, Response } from 'express';
import { GenreController } from '../controllers/genre.controller';
import { MovieController } from '../controllers/movie.controller';

export class NodeRoutes {
    public initNodeRoutes(app: Application, baseUrl: string) {
        this.movieRoutes(app, baseUrl);
        this.genreRoutes(app, baseUrl);
    }


    private movieRoutes(app: Application, baseUrl: string) {

        const movieController: MovieController = new MovieController();
        app.get(baseUrl + '/movies-all', (req: Request, res: Response) => {
            movieController.fetchAllMovies(req, res);
        });

        app.get(baseUrl + '/movies-search', (req: Request, res: Response) => {
            movieController.searchMovies(req, res);
        });

        app.post(baseUrl + '/movies-genre-search', (req: Request, res: Response) => {
            movieController.filterMoviesOnGenre(req, res);
        });

    }

    private genreRoutes(app: Application, baseUrl: string) {

        const genreControler: GenreController = new GenreController();
        app.get(baseUrl + '/genres-all', (req: Request, res: Response) => {
            genreControler.fetchAllGenres(req, res);
        });

    }
}
