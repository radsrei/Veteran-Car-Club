const express = require('express');
const { describe } = require('node:test');
const router = express.Router();
const mysql = require('../mysql').pool;



// get all
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) return res.status(500).send({ error: error });
        conn.query(
            'SELECT * FROM financeiro',
            (error, result, fields) => {
                if (error) return res.status(500).send({ error: error });
                
                res.status(200).send({ response: result });
            }
        );
    });
});

// create one
router.post('/', (req, res, next) => {
    const financeiro = {
        movimento: req.body.movimento,
        saldo: req.body.saldo,
        descricao: req.body.descricao,
        data: req.body.data
    };

    mysql.getConnection((error, conn) => {
        if (error) return res.status(500).send({ error: error });

        conn.query(
            'INSERT INTO financeiro (movimento,saldo,descricao,data) VALUES (?, ?, ?, ?)',
            [financeiro.movimento, financeiro.saldo,financeiro.descricao,financeiro.data],
            (error, result, field) => {
                conn.release();
                if (error) return res.status(500).send({ error: error });

                res.status(201).send({
                    message: 'financeiro inserido com sucesso.',
                    id: result.insertId
                });
            }
        );
    });
});

// // get one
// router.get('/:id', (req, res, next) => {
//     const id = req.params.id;

//     mysql.getConnection((error, conn) => {
//         if (error) return res.status(500).send({ error: error });
//         conn.query(
//             'SELECT * FROM financeiro WHERE id = ?',
//             [id],
//             (error, result, fields) => {
//                 if (error) return res.status(500).send({ error: error });
                
//                 res.status(200).send({ response: result });
//             }
//         );
//     });
// });

// update one
router.patch('/', (req, res, next) => {
    const financeiro = {
        id: req.body.id,
        movimento: req.body.movimento,
        saldo: req.body.saldo,
        descricao: req.body.descricao,
        data: req.body.data
    };

    mysql.getConnection((error, conn) => {
        if (error) return res.status(500).send({ error: error });

        conn.query(
            'UPDATE financeiro SET movimento = ?, saldo = ?, descricao = ?, data = ? WHERE id = ?',
            [financeiro.movimento, financeiro.saldo,financeiro.descricao,financeiro.data, financeiro.id],
            (error, result, field) => {
                conn.release();
                if (error) return res.status(500).send({ error: error });

                res.status(200).send({
                    message: 'financeiro atualizado com sucesso.'
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
            'DELETE FROM financeiro WHERE id = ?',
            [id],
            (error, result, fields) => {
                if (error) return res.status(500).send({ error: error });
                
                res.status(200).send({ message: 'financeiro removido com sucesso' });
            }
        );
    });
});


module.exports = router;