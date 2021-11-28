import express, { Router } from "express";
import recipes from "./recipes.js";
import bodyParser from "body-parser";

const port = 3000;
export const recipeRouter = Router({ mergeParams: true });

// Route: Einfaches GET
recipeRouter.get("/", async (_, res) => {
  res.send({
    message: "Willkommen",
  });
});

// Route: Alle Rezepte aufrufen
recipeRouter.get("/recipes", async (_, res) => {
  res.send({
    data: recipes,
  });
});

// Route: Ein Rezept über ID aufrufen
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

// Route: Ein Rezept aktualisieren
recipeRouter.patch("/recipes/:id", async (req, res) => {
  const id = Number(req.params.id);
  const recipeUpdate = req.body;

  const recipe = recipes.find((recipe) => recipe.id == id);

  if (typeof recipe === "undefined") {
    res.status(404).send({
      message: "recipe not found",
    });
  } else {
    const updatedRecipe = { id, ...recipeUpdate };
    res.send({
      data: updatedRecipe,
    });
  }
});

// Route: Ein Rezept erstellen
recipeRouter.post("/recipes/", async (req, res) => {
  const recipeInfo = req.body;
  const newID = recipes.length + 1;
  const createdRecipe = { id: newID, ...recipeInfo };

  res.send({
    data: createdRecipe,
  });
});

// Funktion: Backend Server starten
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
