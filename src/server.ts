import express, { json, urlencoded } from "express";
import { RegisterRoutes } from "../build/routes";
import cors from "cors";
import bodyParser from "body-parser";
import AppRouter from "./routes";

// Initialisierung von expres
const app = express();
app.use(bodyParser.json());
// Use for development
app.use(
  urlencoded({
    extended: true,
  }),
);
app.use(json());
app.use(cors());
app.use("/v1", AppRouter);

RegisterRoutes(app);

export default app;
