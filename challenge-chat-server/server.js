const express = require("express");
const app = express();
const messages = require("./messages");
const PORT = process.env.PORT || 3000;

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 


// Home Page
app.get('/', (req, res) => {
  res.send("Hello there! Welcome to my chat server");
});


// Read all messages
app.get('/messages', (req, res) => {
    res.json(messages)
});

// Create a new message
app.post('/messages', (req, res) => {
    //  res.send(req.body);
  const index = messages.length;

  const newMessages = {
    id: index + 1,
    from: req.body.from,
    text: req.body.text
  };

  if (!newMessages.from || !newMessages.text) {
    return res.status(400).json({ message: "Please include a name and message" });
  }
  messages.push(newMessages);
  res.json(messages);
});

app.listen(PORT, () => {
  console.log(`Server Started On Port ${PORT}`);
});


// Read one message specified by an ID
app.get("/messages/:id", (req, res) => {
    const found = messages.some((message) => message.id === +req.params.id);
    if (found) {
      res.send(messages.filter((message) => message.id === +req.params.id));
    } else {
      res
        .status(400)
        .json({ message: `No member with the id of ${req.params.id}` });
    }
  });

//   Delete a message, by ID
app.delete("/messages/:id", (req, res) => {
    const found = messages.some((message) => message.id === +req.params.id);
    if (found) {
      res.json({
        msg: `Message deleted ${req.params.id}`,
        message : messages.filter((message) => message.id !== +req.params.id),
      });
    } else {
      res
        .status(400)
        .json({ message: `No member with the id of ${req.params.id}` });
    }
  });
