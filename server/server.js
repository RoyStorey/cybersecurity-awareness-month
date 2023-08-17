const express = require("express");
const app = express();
const path = require("path");
const db = require("./database.js");
const cors = require("cors");

const clientPath = "../client/";

require("dotenv").config({ path: "../.env" });
const ip_address = process.env.IP;
const client_port = process.env.PORT;
const server_port = process.env.SERVER_PORT;

app.use(
  cors({
    origin: `http://${ip_address}:${client_port}`,
  })
);

app.listen(server_port, () => {
  console.log(`Server running on port ${server_port}`);
});

app.use(express.json());

app.get("/api/get-demos", (req, res) => {
  const sql = "SELECT * FROM demos";
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }

    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.post("/api/approve-demo", (req, res) => {
  const { creator_name, description, url } = req.body;
  const sql =
    "INSERT INTO demos (creator_name, description, url) VALUES (?, ?, ?)";
  const params = [creator_name, description, url];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
  });
});

app.post("/api/deny-demo", (req, res) => {
  const { uid } = req.body;
  const sql =
    "DELETE FROM pending WHERE uid= ?";
  const params = [uid];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
  });
});
app.post("/api/delete-demo", (req, res) => {
  const { uid } = req.body;
  const sql =
    "DELETE FROM demos WHERE uid= ?";
  const params = [uid];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
  });
});

app.get("/api/get-unapproved-demos", (req, res) => {
  const sql = "SELECT * FROM pending";
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }

    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.post("/api/post-demo", (req, res) => {
  const { creator_name, description, url } = req.body;
  const sql =
    "INSERT INTO pending (creator_name, description, url) VALUES (?, ?, ?)";
  const params = [creator_name, description, url];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
  });
});

app.use(express.static(clientPath));
