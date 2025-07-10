const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const port = 3000;
const conn = mysql.createConnection({
  host: "localhost",
  user: "Lakash",
  password: "Lakash@123",
  database: "first",
});
conn.connect((err) => {
  if (err) {
    console.log("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});
const app = express();

app.use(cors());
app.use(express.json());

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
// const jsonparser = bodyParser.json();

app.post("/", (req, res) => {
  const { name, email } = req.body;
  console.log("Name:", name);
  console.log("Email:", email);
  res.json({
    message: "Data received successfully",
    name,
    email,
  });
});

app.get("/", (req, res) => {
  conn.query("SELECT * from users", function (err, rows) {
    if (!err) {
      res.send(JSON.stringify(rows[0]));
      console.log("rows:", rows[0]);
    } else {
      console.log("Error while performing Query.");
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.use(function (req, res) {
//   res.setHeader("Content-Type", "text/plain");
//   res.write("you posted:\n");
//   res.end(String(JSON.stringify(req.body, null, 2)));
// });
