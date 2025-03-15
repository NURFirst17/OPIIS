const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const musicRoutes = require('./routes/music');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('src')); // Статические файлы (HTML, CSS, JS)

app.use('/music', musicRoutes);

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
