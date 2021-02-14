import express from "express";
import { accessControlAllowOrigin } from "./middleware/cors";
import { router } from "./routes";
import dotenv from "dotenv";
import sessions from "client-sessions";
import { loadUserFromSession } from "./middleware/auth";

dotenv.config();
const settings = require("../settings");

const app: express.Application = express();

app.use(accessControlAllowOrigin);

app.use(
  sessions({
    cookieName: "session",
    secret: settings.SESSION_SECRET_KEY,
    duration: settings.SESSION_DURATION,
    activeDuration: settings.SESSION_EXTENSION_DURATION,
    cookie: {
      httpOnly: true,
      secure: settings.SESSION_SECURE_COOKIES,
    },
  })
);

app.use(loadUserFromSession);

//app.use(express.json());

app.use(router);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("started at: " + port);
});
