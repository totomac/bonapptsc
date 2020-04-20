/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import {recipesRouter} from "./items/recipes.router"

dotenv.config();
/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
 }

 const PORT: number = parseInt(process.env.PORT as string, 10);

 const app = express();
/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/recipes", recipesRouter);


/**
 * Server Activation
 */
// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( PORT, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${PORT}` );
} );

