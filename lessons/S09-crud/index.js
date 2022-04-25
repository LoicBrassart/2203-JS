const express = require(`express`);
const app = express();

app.use(express.json());

app.get(`/unicorns`, (req, res) => {
  res.send(`unicorns list`);
});
app.get(`/unicorns/:idx`, (req, res) => {
  res.send(`Details about unicorns #${req.params.idx} !`);
});
app.delete(`/unicorns/:idx`, (req, res) => {
  res.send(`Details delete unicorns #${req.params.idx} !`);
});
app.post(`/unicorns`, (req, res) => {
  res.send(`Should create unicorns ${req.body.name}`);
});
app.put(`/unicorns/:idx`, (req, res) => {
  res.send(`Should update unicorns #${req.params.idx} called ${req.body.name}`);
});
app.listen(8650, () => {
  console.log(`API listening in port http://localhost:8650`);
});
