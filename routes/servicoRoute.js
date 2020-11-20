const express = require('express')
const router = express.Router()

//Retorna todos os serviços
router.get('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Serviços encontrados'
  })
})

//Insere um novo serviço
router.post('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Serviço criado com sucesso'
  })
})

//Retorna um serviço especifico
router.get('/:id_service', (req, res, next) => {
  const id = req.params.id_service

  res.status(302).send({
    mensagem: 'Detalhes do serviço',
    id: id
  })
})

//Altera os dados do serviço
router.put('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Serviço alterado com sucesso'
  })
})

//Exclui um serviço
router.delete('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Serviço excluido com sucesso'
  })
})

module.exports = router