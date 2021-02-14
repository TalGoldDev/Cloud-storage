import express, { Request, Response, Router } from "express";
import { AddUserToDatabase } from "../database/create";
import { getUserFromDB } from "../database/read";

export const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("server running");
});

router.post("/register", async (req: Request, res: Response) => {
  let { name, password, email, memberlevel } = req.body;
  let result = await AddUserToDatabase(name, password, email, memberlevel);
  if (result) {
    console.log("added user:" + email + " succesfully to database");
  } else {
    console.log("Failed to add user:" + email + " to database");
  }
  res.send(result);
});

router.post("/login", async (req: Request, res: Response) => {
  console.log("login");
  let { password, email } = req.body;
  let user = await getUserFromDB(email);

  // check if user exists
  if (user == null) {
    return res.send("User not found");
  }

  if (password == user.password) {
    return res.send(true);
  } else {
    return res.send(false);
  }
});
