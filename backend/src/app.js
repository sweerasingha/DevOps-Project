require('dotenv').config()
const express = require('express')
const app = express()
const createHttpError = require('http-errors')
const UserRouter = require('./routes/user')
const PatientRouter = require('./routes/patient')

//cors
const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use('/api/v1/user', UserRouter);
app.use('/api/v1/patient', PatientRouter);

app.use((err, req, res, next) => {
    if (createHttpError.isHttpError(err)) {
        res.status(err.status).send({ message: err.message })
    } else {
        res.status(500).send({ message: err.message })
    }
    //error unknown
    res.status(500).send({ message: "Error Unknown" })
})

module.exports = app;