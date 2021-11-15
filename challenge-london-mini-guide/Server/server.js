const express = require("express");
const app = express();
const fs = require("fs");

const PORT = process.env.PORT || 3000;

// Home Page
app.get("/", (req, res) => {
  res.send("Welecome to the server!");
});

// Cities and Catagories
app.get("/:city/:category", (req, res) => {
  const city = req.params.city;
  const category = req.params.category;
  const cityPath = `./data/${city}.json`;
  if (fs.existsSync(cityPath)) {
    const cityData = require(cityPath);
    if (cityData[category]) {
      console.log(cityData[category]);
      res.send(cityData[category]);
    } else {
      res.status(404).send({
        msg: `We could not find the ${category}`,
      });
    }
  } else {
    res.status(404).send({
      msg: `We could not find the ${city}`,
    });
  }
});

//  listening Port
app.listen(PORT, () => {
  console.log(`Server Started On Port ${PORT}`);
});
