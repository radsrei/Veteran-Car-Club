import express from 'express'

router.get('/eventos', getEventos)
router.post('/eventos',createEventos)
router.put('/eventos/:id', updateEventos)
router.delete('/eventos/:id', deleteEventos)

// export default router


// const express = require('express');
const router = express.Router();

// get all
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'GET nos Eventos.'
    });
});

// create one
router.post('/', (req, res, next) => {
    const order = {
        id: req.body.id,
        qty: req.body.quantity
    };

    res.status(201).send({
        message: 'Evento criado com sucesso.',
        newOrder: order
    });
});

// get one
router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    if (id == 1) {
        msg = 'Você descobriu o ID especial';
    } else {
        msg = 'Você passou um ID qualquer';
    }
    res.status(200).send({
        mensagem: msg,
        id: id
    })
});

// update one
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Evento atualizado com sucesso.'
    });
});

// delete one
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Evento removido com sucesso.'
    });
});

module.exports = router;