import express, { Router } from "express";

// example data
export const recipes = [
  {
    name: "Blaubeer Muffins",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Zucker",
        menge: "500 gramm",
      },
    ],
    schritte: [
      {
        name: "Zutaten mischen",
      },
      {
        name: "20 Minuten bei 180 Grad im Ofen backen",
      },
    ],
  },
  {
    name: "Schoko Muffins",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Zucker",
        menge: "500 gramm",
      },
    ],
    schritte: [
      {
        name: "Zutaten mischen",
      },
      {
        name: "20 Minuten bei 180 Grad im Ofen backen",
      },
    ],
  },
  {
    name: "Nougat Muffins",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Zucker",
        menge: "500 gramm",
      },
    ],
    schritte: [
      {
        name: "Zutaten mischen",
      },
      {
        name: "20 Minuten bei 180 Grad im Ofen backen",
      },
    ],
  },
];

const port = 3000;
export const globalRouter = Router({ mergeParams: true });

// Basic get
globalRouter.get("/", async (_, res) => {
  res.send({
    message: "Willkommen",
  });
});

// Basic get
globalRouter.get("/recipes", async (_, res) => {
  res.send({
    message: recipes,
  });
});

globalRouter.get("/recipes/:id", async (req, res) => {
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
