require('dotenv').config()

const express = require('express')
const app = express()

const mongoose = require('./configs/mongoose.config')
require('./configs/middleware.config')(app)
require('./configs/session.config')(app)


app.use('/api/form', require('./routes/sentence.routes'))
app.use('/api/favorites', require('./routes/favorite.routes'))


app.all('*', (req, res) => res.sendStatus(404))

app.use((req, res) => { res.sendFile(__dirname + "/public/index.html"); });

module.exports = app