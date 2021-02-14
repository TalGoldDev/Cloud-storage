import { Request, Response, NextFunction } from "express";

declare module "express-serve-static-core" {
  export interface Request {
    session: { userToken: string }; // or any other type
  }
}

export function loadUserFromSession(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!(req.session && req.session.userToken)) {
    console.log("didn't find any active session");
    return next();
  }

  // go over sessions table in postgres. find session & user.
  // find user in members table and get data.
  // Theres a cookie defined, find user/session and append data for futher processing.

  console.log("here");
  console.log(req);
  return next();
}
