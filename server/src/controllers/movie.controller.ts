import { Request, Response } from "express";
import { DatabaseConnection } from "../database/connection";
import { Movies } from './../model/movies.model';

export class MovieController extends DatabaseConnection {

    public async fetchAllMovies(req: Request, res: Response) {
        try {

            const query: string = 'SELECT * from s_movie_mania.movies';
            const result: any = await super.dbConnection(query);
            if (!result || !result.rows) {
                return res.status(200).json({ Error: result });
            }
            const movies: Movies[] = result.rows || [];
            res.status(200).json({ List: movies });

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }
    }


    public async searchMovies(req: Request, res: Response) {

        try {

            const searchKey: string = req.query.search_key?.toString() || '';
            const query: string = `select * from s_movie_mania.movies where lower(name) like '%${searchKey}%' or lower(director) like '%${searchKey}%'`;
            const result: any = await super.dbConnection(query);

            if (!result || !result.rows) {
                return res.status(200).json({ Error: result });
            }
            const filteredMovies: Movies[] = result.rows || [];
            res.status(200).json({ List: filteredMovies || [] });

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }

    }


    public async filterMoviesOnGenre(req: Request, res: Response) {

        try {

            const genres: string[] = req.body.genres || [];
            const query: string = `select * from s_movie_mania.movies where ARRAY[${genres.map((genre: string) => `'${genre.trim()}'`)}]::character varying[] <@ genre`;
            const result: any = await super.dbConnection(query);

            if (!result || !result.rows) {
                return res.status(200).json({ Error: result });
            }
            const filteredMovies: Movies[] = result.rows || [];
            res.status(200).json({ List: filteredMovies || [] });

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }

    }


    private async generateMovies() {

        const movies: any[] = require('../data/movies');

        for (const movie of movies) {

            const queryy: string = `INSERT INTO s_movie_mania.movies(_99popularity, director, imdb_score, name, genre) VALUES ( ${movie._99popularity}, '${movie.director}', ${movie.imdb_score}, '${movie.name}',array[${movie.genre.map((genre: string) => `'${genre.trim()}'`)}])`;
            console.log(queryy);
            const result: any = await super.dbConnection(queryy);

        }

    }

    private async generateGenres() {

        const genres: any[] = require('../data/genres');

        for (const genre of genres) {

            const query: string = `INSERT INTO s_movie_mania.genres( name) VALUES ( '${genre.name}')`;
            console.log(query);
            const result: any = await super.dbConnection(query);

        }

    }


}