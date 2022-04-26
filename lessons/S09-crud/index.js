const dotenv = require("dotenv");
dotenv.config();
const express = require(`express`);
const app = express();
const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
});

app.use(express.json());

app.get(`/unicorns`, async (req, res) => {
  const [resultSql] = await db.query("SELECT * FROM unicorn");
  res.send(resultSql);
});

app.get(`/unicorns/:idx`, async (req, res) => {
  const resultSql = await db.query(`SELECT * FROM unicorn WHERE id=?`, [
    req.params.idx,
  ]);
  res.send(resultSql[0]);
});

app.delete(`/unicorns/:idx`, async (req, res) => {
  const resultSql = await db.query(`DELETE FROM unicorn WHERE id=?`, [
    req.params.idx,
  ]);
  res.send(resultSql[0]);
});

app.post(`/unicorns`, async (req, res) => {
  const resultSql = await db.query(`INSERT INTO unicorn (name) VALUES (?)`, [
    req.body.name,
  ]);
  res.send(resultSql[0]);
});

app.put(`/unicorns/:idx`, async (req, res) => {
  const resultSql = await db.query("UPDATE unicorn SET name=? WHERE id=?", [
    req.body.name,
    req.params.idx,
  ]);
  res.send(resultSql[0]);
});

app.listen(8650, () => {
  console.log(`API listening in port http://localhost:8650`);
});
