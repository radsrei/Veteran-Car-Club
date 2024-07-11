import express from 'express'

router.get('/membros', getMembros)
router.post('/membros',createMembros)
router.put('/membros/:id', updateMembros)
router.delete('/membros/:id', deleteMembros)

export default router


const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;



// get all
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) return res.status(500).send({ error: error });
        conn.query(
            'SELECT * FROM product',
            (error, result, fields) => {
                if (error) return res.status(500).send({ error: error });
                
                res.status(200).send({ response: result });
            }
        );
    });
});

// create one
router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };

    mysql.getConnection((error, conn) => {
        if (error) return res.status(500).send({ error: error });

        conn.query(
            'INSERT INTO product (name, price) VALUES (?, ?)',
            [product.name, product.price],
            (error, result, field) => {
                conn.release();
                if (error) return res.status(500).send({ error: error });

                res.status(201).send({
                    message: 'Produto inserido com sucesso.',
                    id: result.insertId
                });
            }
        );
    });
});

// get one
router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    mysql.getConnection((error, conn) => {
        if (error) return res.status(500).send({ error: error });
        conn.query(
            'SELECT * FROM product WHERE id = ?',
            [id],
            (error, result, fields) => {
                if (error) return res.status(500).send({ error: error });
                
                res.status(200).send({ response: result });
            }
        );
    });
});

// update one
router.patch('/', (req, res, next) => {
    const product = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
    };

    mysql.getConnection((error, conn) => {
        if (error) return res.status(500).send({ error: error });

        conn.query(
            'UPDATE product SET name = ?, price = ? WHERE id = ?',
            [product.name, product.price, product.id],
            (error, result, field) => {
                conn.release();
                if (error) return res.status(500).send({ error: error });

                res.status(200).send({
                    message: 'Produto atualizado com sucesso.'
                });
            }
        );
    });
});

// delete one
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    mysql.getConnection((error, conn) => {
        if (error) return res.status(500).send({ error: error });
        conn.query(
            'DELETE FROM product WHERE id = ?',
            [id],
            (error, result, fields) => {
                if (error) return res.status(500).send({ error: error });
                
                res.status(200).send({ message: 'Produto removido com sucesso' });
            }
        );
    });
});


module.exports = router;