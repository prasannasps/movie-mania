import { Application, Request, Response } from 'express';
import { GenreController } from '../controllers/genre.controller';
import { MovieController } from '../controllers/movie.controller';
import { UserController } from '../controllers/user.controller';
import * as jwt from 'jsonwebtoken';

const authenticateToken = (req: any, res: Response, next: any) => {
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) res.sendStatus(401);

    jwt.verify(token as string, process.env.ACCESS_TOKEN_SECRET as string, (err, user) => {
        if (err) return res.sendStatus(403);
        console.log(user);
        req.user = user;
        next();
    })
}

export class NodeRoutes {

    users = [
        {
            id: 1,
            name: 'Admin'
        },
        {
            id: 2,
            name: 'Jim'
        }
    ]

    public initNodeRoutes(app: Application, baseUrl: string) {
        this.userRoutes(app, baseUrl);
        this.movieRoutes(app, baseUrl);
        this.genreRoutes(app, baseUrl);
    }


    private userRoutes(app: Application, baseUrl: string) {

        const userCtrl: UserController = new UserController();
        app.post(baseUrl + '/login', (req: Request, res: Response) => {
            userCtrl.getUser(req, res);
        });

        app.get(baseUrl + '/posts', authenticateToken, (req: any, res: Response) => {
            // userCtrl.getUser(req, res);
            console.log(req.user);
            res.json(this.users.find(user => user.id === req['user'].userId));
        });

    }


    private movieRoutes(app: Application, baseUrl: string) {

        const movieController: MovieController = new MovieController();
        app.get(baseUrl + '/movies-all', (req: Request, res: Response) => {
            movieController.fetchAllMovies(req, res);
        });

        app.get(baseUrl + '/movie', (req: Request, res: Response) => {
            movieController.fetchMovieOnId(req, res);
        });

        app.get(baseUrl + '/movies-search', (req: Request, res: Response) => {
            movieController.searchMovies(req, res);
        });

        app.post(baseUrl + '/movies-genre-search', (req: Request, res: Response) => {
            movieController.filterMoviesOnGenre(req, res);
        });

        app.post(baseUrl + '/movie-insert', (req: Request, res: Response) => {
            movieController.insertMovie(req, res);
        });

        app.post(baseUrl + '/movie-update', (req: Request, res: Response) => {
            movieController.updateMovie(req, res);
        });

    }

    private genreRoutes(app: Application, baseUrl: string) {

        const genreControler: GenreController = new GenreController();
        app.get(baseUrl + '/genres-all', (req: Request, res: Response) => {
            genreControler.fetchAllGenres(req, res);
        });

    }
}
