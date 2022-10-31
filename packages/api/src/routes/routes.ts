import express from "express";

import { UserRoute } from "./User";

const routes = express.Router();

routes.use("/user", UserRoute);

export { routes };
