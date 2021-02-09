import express from "express";
import { accessControlAllowOrigin } from "./middleware/cors";
import { router } from "./routes";

const app: express.Application = express();

app.use(router);
app.use(accessControlAllowOrigin);

const port = process.env.PORT || 3000;
const server = app.listen(port, ()=> {
    console.log("started at: 3001");
});