const express = require('express')
const router = express.Router()

//Retorna todos os usuário
router.get('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usuários encontrados'
  })
})

//Insere um novo usuário
router.post('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Usuário criado com sucesso'
  })
})

//Retorna um usuário especifico
router.get('/:id_user', (req, res, next) => {
  const id = req.params.id_user

  res.status(302).send({
    mensagem: 'Detalhe do Usuário',
    id: id
  })
})

//Altera os dados do usuário
router.put('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usuário alterado com sucesso'
  })
})

//Exclui um usuário
router.delete('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usuário excluido com sucesso'
  })
})

module.exports = router