import express, { Request, Response, Router } from "express";

export const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("server running");
});

router.post("/register", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("server running");
});
