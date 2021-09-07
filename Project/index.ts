require("dotenv-safe").config();
import { recipes } from "./recipes";
import express, { Router, Request, Response } from "express";

const port: number = Number(process.env.PORT);

export const globalRouter = Router({ mergeParams: true });
// npm run artillery --testInput=./test1/test.yml --testOutput=./test1/report_test1.json

// Basic get
globalRouter.get("/", async (_: Request, res: Response) => {
  res.send({
    message: "Willkommen",
  });
});

// Basic get
globalRouter.get("/recipes", async (_: Request, res: Response) => {
  res.send({
    message: recipes,
  });
});

globalRouter.get("/recipes/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id) - 1;
  if (typeof recipes[id] === "undefined") {
    res.status(404).send({
      message: "recipe not found",
    });
  } else {
    res.send({
      message: recipes[id],
    });
  }
});

export const startServer = () => {
  const app = express();

  app.use("/", globalRouter);

  const server = app.listen(port, () =>
    console.log("Server is running on port", port)
  );
  return { server };
};

startServer();
