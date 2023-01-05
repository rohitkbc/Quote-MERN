const express = require("express");
const morgan = require('morgan')
const cors = require("cors");
const app = express();
require("./database"); // connecting to database
const quoteModel = require("./quote-model");

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));   // To log request and response data

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/view", (req, res) => {
  quoteModel.find((err, quotes) => (err ? res.status(404).json(err) : res.json(quotes)));
});

app.post("/add", async (req, res) => {
  let lastId;
  await quoteModel.find({}).sort({_id: -1}).limit(1)        // last document id
  .then((item) => {
    lastId = parseInt(item[0].id) + 1                       // string to number and then increment  by 1
  })

  const obj = {
    id: lastId.toString(),                                  // number to string
    quote: req.body.quote,
    author: req.body.author,
  };

  quoteModel
    .create(obj)
    .then((result) => res.json(result))
    .catch((err) => res.status(404).json({success: false, error: err}));
});

app.delete("/remove/:id", (req, res) => {
  quoteModel.findOneAndRemove({ id: req.params.id }, (err, item) => {
    if (err) {
      return res.json({ success: false, msg: "Cannot remove item" });
    }
    if (!item) {
      return res.status(404).json({ success: false, msg: "Quote not found" });
    }
    res.json({ success: true, msg: "Quote deleted." });
  });
});

app.put("/update/:id", (req, res) => {
  const filter = { id: req.params.id };
  const update = {
    id: req.params.id,
    quote: req.body.quote,
    author: req.body.author,
  };

  let obj = quoteModel.findOneAndReplace(
    filter,
    update,
    {
      new: true,
    },
    (err, item) => {
      if (err) {
        return res.json({ success: false, msg: "Cannot remove item" });
      }
      if (!item) {
        return res.status(404).json({ success: false, msg: "Quote not found" });
      }
      res.json({ success: true, msg: "Quote Updated.", quote: item });
    }
  );
});

app.listen(8000, () => {
  console.log(`server is running on 8000`);
});
