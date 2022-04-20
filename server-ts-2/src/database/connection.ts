
import { Pool, Client } from "pg";

export class DatabaseConnection {

    private credentials = {
        user: "postgres",
        host: "localhost",
        database: "movie_mania",
        password: "postgres",
        port: 5432,
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

