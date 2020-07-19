const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const items = require("./route/api/items");


// load dotenv file
dotenv.config({ path: "./config/config.env" });


const app = express();

app.use(bodyParser.json());
app.use('/api/v1/items', items);

// connection to db
connectDB();

const port = process.env.PORT || 4000

app.listen(port, () => console.log(` server running at port ${port}` ))