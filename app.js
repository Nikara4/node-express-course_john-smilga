const express = require("express");
const app = express();
const { people } = require("./02-express-tutorial/data");

// status assets
app.use(express.static("./02-express-tutorial/methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .send({ success: false, msg: "Please provide credentials" });
  }
  res.status(201).json({ success: true, person: name });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide credentials");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
