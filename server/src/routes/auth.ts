import express, { Request, Response, Router } from "express";
import { AddUserToDatabase } from "../database/create";
import { getUserFromDB } from "../database/read";
import bcrypt from "bcryptjs";

export const router: Router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  let hash = bcrypt.hashSync(
    req.body.password,
    parseInt(process.env.BCRYPT_WORK_FACTOR!)
  );

  req.body.password = hash;

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
  let user = await getUserFromDB(req.body.email);

  // check if user exists
  if (user == null) {
    return res.send("User not found");
  }

  if (bcrypt.compareSync(req.body.password, user.password)) {
    return res.send(true);
  } else {
    return res.send(false);
  }
});
