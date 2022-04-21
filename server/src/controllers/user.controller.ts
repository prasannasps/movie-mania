import { Request, Response } from 'express';
import { DatabaseConnection } from './../database/connection';
import * as jwt from 'jsonwebtoken';
import * as fs from "fs";

export class UserController extends DatabaseConnection {

    // RSA_PRIVATE_KEY = fs.readFileSync('./demos/private.key');
    RSA_PRIVATE_KEY = '';

    public async getUser(req: Request, res: Response) {

        try {
            const { emailid, password } = req.body;
            const result: any = await this.getUserData(emailid, password);

            if (result && result.Data) {
                const userId = result.Data.id;

                const jwtBearerToken = jwt.sign({}, this.RSA_PRIVATE_KEY, {
                    algorithm: 'RS256',
                    expiresIn: 120,
                    subject: userId
                });

                // send the JWT back to the user
                // TODO - multiple options available                              
            }
            else {
                // send status 401 Unauthorized
                res.sendStatus(401);
            }

            // res.status(200).json({ Data: result });

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }

    }

    public async getUserData(emailid: string, password: string) {
        if (!emailid || !password)
            return { Error: 'Credentials are not valid' };

        const query: string = `SELECT * from s_movie_mania.users where email = ${emailid} and password = ${password}`;
        const result: any = await super.dbConnection(query);
        if (!result || !result.rows) {
            return { Error: result };
        }
        const user = result.rows[0];
        return { Data: user };
    }

}