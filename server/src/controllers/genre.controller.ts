import { Request, Response } from "express";
import { DatabaseConnection } from "../database/connection";
import { Genre } from './../model/genre.model';

export class GenreController extends DatabaseConnection {

    public async fetchAllGenres(req: Request, res: Response) {

        try {
            const query: string = 'SELECT * from s_movie_mania.genres';
            const result: any = await super.dbConnection(query);
            if (!result || !result.rows) {
                return res.status(200).json({ Error: result });
            }
            const genres: Genre[] = result.rows || [];
            res.status(200).json({ List: genres });

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }

    }

}