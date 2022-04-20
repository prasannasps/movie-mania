import { Application, Request, Response } from 'express';
import { MovieController } from '../controllers/movie.controller';

export class NodeRoutes {
    public initNodeRoutes(app: Application, baseUrl: string) {
        this.movieRoutes(app, baseUrl);
    }


    private movieRoutes(app: Application, baseUrl: string) {

        const movieControler: MovieController = new MovieController();
        app.get(baseUrl + '/movies-all', (req: Request, res: Response) => {
            movieControler.fetchAllMovies(req, res);
        });

        app.get(baseUrl + '/movies-search', (req: Request, res: Response) => {
            movieControler.searchMovies(req, res);
        });

    }
}
