import cors from "cors";
import express, { Request, Response } from "express";
import { corsOptions } from "./config/cors";
import { connection } from "./database/connection";
import { routes } from "./routes/routes";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

const server = express();

server.use(cors(corsOptions));
server.use(express.json());

server.use("/v1", routes);

server.get("/", (request: Request, response: Response) => {
  return response.status(200).json({ hello: "H" });
});

connection
  .sync({ force: true })
  .then(() => {
    server.listen(port, () =>
      console.error(`Server listening on port: ${port}`)
    );
  })
  .catch((error) => console.log(error));

export { server };
