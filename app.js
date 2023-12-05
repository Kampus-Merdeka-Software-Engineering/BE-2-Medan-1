const express = require('express');
const cors = require('cors');
const bookingRoute = require('./src/routes/bookingRoute');
const destinationRoute = require('./src/routes/destinationRoute');
const promoRoute = require('./src/routes/promoRoute');

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/', bookingRoute);
app.use('/', destinationRoute);
app.use('/', promoRoute);

app.get('/', (req, res) => {
  res.send('<h1>Halo, Selamat Datang!</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
