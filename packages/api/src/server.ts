import cors from "cors";
import express from "express";
import { connection } from "./database/connection";

const port = process.env.PORT || 3000;

const server = express();

connection
  .sync()
  .then(() => {
    server.listen(port, () => console.log(`Server listening on port: ${port}`));
  })
  .catch((error) => console.log(error));
