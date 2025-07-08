const mysql = require("mysql2");
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

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
// const jsonparser = bodyParser.json();

const urlencoded = bodyParser.urlencoded({
  extended: true,
});

app.post("/login", urlencoded, (req, res) => {
  const { name, email } = req.body;
  console.log("Name:", name);
  console.log("Email:", email);
  res.json({
    message: "Data received successfully",
    name,
    email,
  });
});

// app.use(function (req, res) {
//   res.setHeader("Content-Type", "text/plain");
//   res.write("you posted:\n");
//   res.end(String(JSON.stringify(req.body, null, 2)));
// });
