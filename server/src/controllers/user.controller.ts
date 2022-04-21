import { Request, Response } from 'express';
import { DatabaseConnection } from './../database/connection';
import * as jwt from 'jsonwebtoken';

export class UserController extends DatabaseConnection {

    public async getUser(req: Request, res: Response) {

        try {
            const { emailid, password } = req.body;
            const result: any = await this.getUserData(emailid, password);

            if (result && result.Data) {
                const userData = result.Data;
                const user = { user: userData.id };

                const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET as string);
                res.status(200).json({ user: userData, accessToken: accessToken });
            }
            else {
                res.sendStatus(401);
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }

    }

    public async getUserData(emailid: string, password: string) {
        if (!emailid || !password)
            return { Error: 'Credentials are not valid' };

        const query: string = `SELECT * from s_movie_mania.users where email = '${emailid}' and password = '${password}'`;
        const result: any = await super.dbConnection(query);
        if (!result || !result.rows) {
            return { Error: result };
        }
        const user = result.rows[0];
        return { Data: user };
    }

    public async getAllUsers() {

        try {

            const query: string = `SELECT * from s_movie_mania.users`;
            const result: any = await super.dbConnection(query);
            if (!result || !result.rows) {
                return { Error: result };
            }
            const users = result.rows;
            return ({ List: users });

        } catch (error) {
            console.log(error);
            return ({ message: error });
        }

    }

}