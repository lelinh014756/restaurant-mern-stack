const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require('dotenv')

const connectDB = require("./database/db");
const authRoutes = require("./routes/auth");

dotenv.config();
const URI = process.env.DATABASE_URL;

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/auth", authRoutes);

connectDB(URI);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listen on port ${port}`));
