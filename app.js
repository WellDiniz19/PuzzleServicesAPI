const express = require('express')
const app = express()
const morgan = require('morgan')

const rotaUsusario = require('./routes/usersRoute')
const rotaServico = require('./routes/servicoRoute')

//Monitorar a execução
app.use(morgan('dev'))

app.use('/users', rotaUsusario)
app.use('/services', rotaServico)

//Quando a rota não é encontrada
app.use((req, res, next) => {
  const erro = new Error('Não localizado')
  erro.status = 404
  next(erro)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  return res.send({
    erro: {
      mensagem: error.message
    }
  })
})
module.exports = app