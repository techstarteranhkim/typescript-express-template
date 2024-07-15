import { Router } from "express";
import TodosRouter from "./todos";
import UserRouter from "./users";

const AppRouter = Router();

AppRouter.use("/todos", TodosRouter);
AppRouter.use("/user", UserRouter);

export default AppRouter;
