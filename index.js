import express, { Router } from "express";
import recipes from "./recipes.js";
var bodyParser = require("body-parser");

const port = 3000;
export const recipeRouter = Router({ mergeParams: true });

// Basic get
recipeRouter.get("/", async (_, res) => {
  res.send({
    message: "Willkommen",
  });
});

// Get all recipes
recipeRouter.get("/recipes", async (_, res) => {
  res.send({
    data: recipes,
  });
});

// Get one recipe by ID
recipeRouter.get("/recipes/:id", async (req, res) => {
  const id = Number(req.params.id);
  const recipe = recipes.find((recipe) => recipe.id == id);

  if (typeof recipe === "undefined") {
    res.status(404).send({
      message: "recipe not found",
    });
  } else {
    res.send({
      data: recipe,
    });
  }
});

// Update one recipe by ID
recipeRouter.patch("/recipes/:id", async (req, res) => {
  const id = Number(req.params.id);
  recipeUpdate = req.body;

  const recipe = recipes.find((recipe) => recipe.id == id);

  if (typeof recipe === "undefined") {
    res.status(404).send({
      message: "recipe not found",
    });
  } else {
    const updatedRecipe = { id, ...recipeUpdate };
    res.send(updatedRecipe);
  }
});

recipeRouter.post("/recipes/", async (req, res) => {
  const recipeInfo = req.body;
  const createdRecipe = { ...recipeInfo, id: recipes.length() };

  res.send(createdRecipe);
});

export const startServer = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use("/", recipeRouter);

  const server = app.listen(port, () =>
    console.log("Server is running on port", port)
  );
  return { server };
};

startServer();
