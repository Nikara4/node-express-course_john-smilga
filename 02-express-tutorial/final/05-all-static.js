const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
app.use(express.static("./02-express-tutorial/navbar-app"));

// app.get("/", (req, res) => {
//   res.sendFile(
//     path.resolve(__dirname, "./02-express-tutorial/navbar-app/index.html")
//   ); adding to status assets
// });

app.all("*", (req, res) => {
  res.status(404).send("page not found");
});

app.listen(5000, () => {
  console.log("the server in listening on port 5000...");
});
