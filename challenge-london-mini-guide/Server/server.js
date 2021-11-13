const express = require("express");
const app = express();
const data = require("./data/Stratford.json");


const PORT = process.env.PORT || 3000 ; 


// Home Page
app.get("/", (req, res) => {
    res.send(" welecome to the server!");
});


// pharmcies 
app.get("/pharmcies", (req, res) => {
    res.send(data.pharmacies);
});

// colleges 
app.get("/colleges", (req, res) => {
    res.json(data.colleges);
});
  
// doctors 
app.get("/doctors", (req, res) => {
    res.json(data.doctors);
});

// hospitals 
app.get("/hospitals", (req, res) => {
    res.json(data.hospitals);
});


//  listening Port
app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
  });
