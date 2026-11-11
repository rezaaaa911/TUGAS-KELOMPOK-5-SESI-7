const express = require('express');
const app = express();
const port = 3000;

const dataAnggota = [
  { id: 1, nama: "Muhammad Reza Arridho", nim: "20250040162" },
  { id: 2, nama: "Maria Yosepha Charlita Roe Mudapue", nim: "20250040131" },
  { id: 3, nama: "Agil Fadilah", nim: "20250040031" },
  { id: 4, nama: "Natasya Melinda", nim: "20250040065" },
  { id: 5, nama: "Pauji", nim: "20250040118" }
];

app.get('/', (req, res) => {
  res.send(`Selamat datang di Webserver Kelompok 5`);
});

app.get('/team/:nama', (req, res) => {
  res.send(`Hallo, saya ${req.params.nama} dari Kelompok 5`);
});

app.get('/info', (req, res) => {
  res.json(dataAnggota);
});

app.get('/data', (req, res) => {
  res.redirect('/info');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});