const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;

require('dotenv').config();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const canteensRouter = require('./routes/canteens');
const stallsRouter = require('./routes/stalls');
const foodsRouter = require('./routes/foods');
const newsRouter = require('./routes/news');
const announcementsRouter = require('./routes/announcements');

app.use('/canteens', canteensRouter);
app.use('/stalls', stallsRouter);
app.use('/foods', foodsRouter);
app.use('/news', newsRouter);
app.use('/announcements', announcementsRouter);

app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
});

