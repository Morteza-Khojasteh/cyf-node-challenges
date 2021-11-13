const express = require("express");
const app = express();
const stratford = require("./data/Stratford.json");
const harrow = require("./data/Harrow.json");
const heathrow = require("./data/Heathrow.json");

const PORT = process.env.PORT || 3000 ; 


// Home Page
app.get("/", (req, res) => {
    res.send(" welecome to the server!");
});


// pharmcies 
app.get("/:city/pharmcies", (req, res) => {
    const found = req.params.city;
    if (found === "stratford") {
      res.send(stratford.pharmacies);
    } else if (found === "harrow" ){
        res.send(harrow.pharmacies);
    } else if (found === "heathrow" ){
        res.send(heathrow.pharmacies);
    } else {
      res
        .status(400)
        .json({ msg: `There isn't: ${req.params.city}` });
    }
  });

// colleges 
app.get("/:city/colleges", (req, res) => {
    const found = req.params.city;
    if (found === "stratford") {
      res.send(stratford.pharmacies);
    } else if (found === "harrow" ){
        res.send(harrow.pharmacies);
    } else if (found === "heathrow" ){
        res.send(heathrow.pharmacies);
    } else {
      res
        .status(400)
        .json({ msg: `There isn't: ${req.params.city}` });
    }
});
  
// doctors 
app.get("/:city/doctors", (req, res) => {
    const found = req.params.city;
    if (found === "stratford") {
      res.send(stratford.pharmacies);
    } else if (found === "harrow" ){
        res.send(harrow.pharmacies);
    } else if (found === "heathrow" ){
        res.send(heathrow.pharmacies);
    } else {
      res
        .status(400)
        .json({ msg: `There isn't: ${req.params.city}` });
    }
});

// hospitals 
app.get("/:city/hospitals", (req, res) => {
    const found = req.params.city;
    if (found === "stratford") {
      res.send(stratford.pharmacies);
    } else if (found === "harrow" ){
        res.send(harrow.pharmacies);
    } else if (found === "heathrow" ){
        res.send(heathrow.pharmacies);
    } else {
      res
        .status(400)
        .json({ msg: `There isn't: ${req.params.city}` });
    }
});


//  listening Port
app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
  });
