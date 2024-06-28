require('dotenv').config();
// const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT;
const app = require('./app');

//test
mongoose.connect(
    "mongodb://mongodb:27017/medicalapp",
    { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(result => {
        console.log("db connected");
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    }).catch(err => {
        console.error("Database connection failed", err);
    });

