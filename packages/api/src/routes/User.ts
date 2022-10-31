import express from "express";

import { UserController } from "../controllers/User";
const UserRoute = express.Router();

UserRoute.post("/", UserController.create);

export { UserRoute };
