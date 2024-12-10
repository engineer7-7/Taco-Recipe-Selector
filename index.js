// import modules
import express from "express";
import bodyParser from "body-parser";

// create an instance of express framework and initialize the port
const app = express();
const port = 3000;

// initialize the JSON
const recipeJSON =
    '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';

// convert it to Js object
const recipe = JSON.parse(recipeJSON);

// use the static files
app.use(express.static("public"));

// use the body-parser for the request body
app.use(bodyParser.urlencoded({extended: true}));

// create boolean variable to check if we have a recipe
let hasRecipe = false;

// create a variable to initialize an empty id
let id = null;

// create get-route to display the main page
app.get("/", (req, res) => {
    res.render("index.ejs", {hasRecipe: hasRecipe});
});

// create post-route to select a recipe
app.post("/recipe", (req, res) => {
    hasRecipe = true;
    let name = req.body['choice'];
    switch (name) {
        case "chicken":
            id = 0;
            res.render("index.ejs", {hasRecipe: hasRecipe, id: id, recipe: recipe});
            break;
        case "beef":
            id = 1;
            res.render("index.ejs", {hasRecipe: hasRecipe, id: id, recipe: recipe});
            break;
        case "fish":
            id = 2;
            res.render("index.ejs", {hasRecipe: hasRecipe, id: id, recipe: recipe});
            break;
        default:
            res.sendStatus(400);
    }
});

// run the app
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
