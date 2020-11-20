const express = require('express')
const app = express()

const rotaUsusario = require('./routes/usersRoute')
const rotaServico = require('./routes/servicoRoute')

app.use('/users', rotaUsusario)
app.use('/services', rotaServico)

module.exports = app