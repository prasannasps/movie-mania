const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const moviesRoutes = require('./routes/movie-list');

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/', moviesRoutes);

app.get('/', (req, res) => {
    res.send("Hello World");
});


app.listen(PORT, () => console.log(`App is running on ${PORT}`));