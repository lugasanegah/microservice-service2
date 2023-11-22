// Import library express
const express = require('express');

// Inisialisasi server
const app = express();

// Definisi endpoint untuk API
app.get('/api/service', (req, res) => {
  res.send('Halo ini Service 2');
});

// Menjalankan server di port 3001
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server Service 2 berjalan di http://localhost:${PORT}`);
});