const express = require('express');
const app = express();
const connectDB = require('./database/db');

connectDB();

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => console.log(`Listen on port ${port}`));