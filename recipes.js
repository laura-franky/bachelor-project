// Beispiel Rezepte
const recipes = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
  {
    id: 4,
    name: "Bauern Brot",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Wasser",
        menge: "500 Milliliter",
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
    id: 5,
    name: "Sonnenblumenkern Brot",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Wasser",
        menge: "500 Milliliter",
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
    id: 6,
    name: "Schwarzbrot",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Wasser",
        menge: "500 Milliliter",
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
    id: 7,
    name: "Dinkelbrot",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Wasser",
        menge: "500 Milliliter",
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
    id: 8,
    name: "Waffeln",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Milch",
        menge: "500 Milliliter",
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
    id: 9,
    name: "Bananen Waffeln",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Milch",
        menge: "500 Milliliter",
      },
      {
        name: "Bananen",
        menge: "5 Stück",
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
    id: 10,
    name: "Schokoladen Waffeln",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Milch",
        menge: "500 Milliliter",
      },
      {
        name: "Schokolade",
        menge: "500 Gramm",
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
  {
    id: 14,
    name: "Bauern Brot",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Wasser",
        menge: "500 Milliliter",
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
    id: 15,
    name: "Sonnenblumenkern Brot",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Wasser",
        menge: "500 Milliliter",
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
    id: 16,
    name: "Schwarzbrot",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Wasser",
        menge: "500 Milliliter",
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
    id: 17,
    name: "Dinkelbrot",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Wasser",
        menge: "500 Milliliter",
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
    id: 18,
    name: "Waffeln",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Milch",
        menge: "500 Milliliter",
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
    id: 19,
    name: "Bananen Waffeln",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Milch",
        menge: "500 Milliliter",
      },
      {
        name: "Bananen",
        menge: "5 Stück",
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
    id: 20,
    name: "Schokoladen Waffeln",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Milch",
        menge: "500 Milliliter",
      },
      {
        name: "Schokolade",
        menge: "500 Gramm",
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
  {
    id: 24,
    name: "Bauern Brot",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Wasser",
        menge: "500 Milliliter",
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
    id: 25,
    name: "Sonnenblumenkern Brot",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Wasser",
        menge: "500 Milliliter",
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
    id: 26,
    name: "Schwarzbrot",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Wasser",
        menge: "500 Milliliter",
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
    id: 27,
    name: "Dinkelbrot",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Wasser",
        menge: "500 Milliliter",
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
    id: 28,
    name: "Waffeln",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Milch",
        menge: "500 Milliliter",
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
    id: 29,
    name: "Bananen Waffeln",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Milch",
        menge: "500 Milliliter",
      },
      {
        name: "Bananen",
        menge: "5 Stück",
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
    id: 30,
    name: "Schokoladen Waffeln",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Milch",
        menge: "500 Milliliter",
      },
      {
        name: "Schokolade",
        menge: "500 Gramm",
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
    id: 31,
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
    id: 32,
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
    id: 33,
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
  {
    id: 34,
    name: "Bauern Brot",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Wasser",
        menge: "500 Milliliter",
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
    id: 35,
    name: "Sonnenblumenkern Brot",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Wasser",
        menge: "500 Milliliter",
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
    id: 36,
    name: "Schwarzbrot",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Wasser",
        menge: "500 Milliliter",
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
    id: 37,
    name: "Dinkelbrot",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Wasser",
        menge: "500 Milliliter",
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
    id: 38,
    name: "Waffeln",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Milch",
        menge: "500 Milliliter",
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
    id: 39,
    name: "Bananen Waffeln",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Milch",
        menge: "500 Milliliter",
      },
      {
        name: "Bananen",
        menge: "5 Stück",
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
    id: 40,
    name: "Schokoladen Waffeln",
    zutaten: [
      {
        name: "Mehl",
        menge: "500 gramm",
      },
      {
        name: "Milch",
        menge: "500 Milliliter",
      },
      {
        name: "Schokolade",
        menge: "500 Gramm",
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

export default recipes;
