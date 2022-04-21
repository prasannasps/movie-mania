import { Client } from "pg";

export class DatabaseConnection {

    // private credentials = {
    //     user: "postgres",
    //     host: "localhost",
    //     database: "movie_mania",
    //     password: "postgres",
    //     port: 5432,
    // };

    // TO DO : To be moved to env variable
    private credentials = {
        user: "tnrcxacaxfbiel",
        host: "ec2-3-223-213-207.compute-1.amazonaws.com",
        database: "d1d0j209hhocio",
        password: "0781f18f5361c2b5e4e9d6b51475f4ab62d5fb3f3c2cda919d1c328e9c447193",
        port: 5432,
        ssl: {
            rejectUnauthorized: false
        }
    };


    public async testConnection() {

        const clientResult = await this.clientDemo();
        console.log("Time with client: " + clientResult.rows[0]["now"]);

    }

    // Connect with a client.

    public async clientDemo() {
        const client = new Client(this.credentials);
        await client.connect();
        const now = await client.query("SELECT NOW()");
        await client.end();
        return now;
    }


    //Connection Helper Method

    public async dbConnection(query: string, values?: any[]) {

        values ||= [];
        const client = new Client(this.credentials);
        await client.connect();
        const result = await client.query(query, values);
        await client.end();
        return result;

    }


}

