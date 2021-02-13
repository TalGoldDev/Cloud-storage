import express from "express";
import { accessControlAllowOrigin } from "./middleware/cors";
import { router } from "./routes";

const app: express.Application = express();

app.use(accessControlAllowOrigin);
app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;
const server = app.listen(port, ()=> {
    console.log("started at: 3001");
});