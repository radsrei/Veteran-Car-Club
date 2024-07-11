const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

// get all
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) return res.status(500).send({ error: error });
        conn.query(
            'SELECT * FROM evento',
            (error, result, fields) => {
                if (error) return res.status(500).send({ error: error });
                
                res.status(200).send({ response: result });
            }
        );
    });
});

// create one
router.post('/', (req, res, next) => {
    const evento = {
        nome: req.body.nome,
        local: req.body.local,
        endereco: req.body.endereco,
        data: req.body.data,
        convidado: req.body.convidado,
        edicao: req.body.edicao
    };

    mysql.getConnection((error, conn) => {
        if (error) return res.status(500).send({ error: error });

        conn.query(
            'INSERT INTO evento (nome, local,endereco,data,convidado,endereco,dataDeNascimento) VALUES (?, ?, ?, ?, ?, ?)',
            [evento.name, evento.local,evento.endereco,evento.data,evento.convidado,evento.edicao],
            (error, result, field) => {
                conn.release();
                if (error) return res.status(500).send({ error: error });

                res.status(201).send({
                    message: 'Evento inserido com sucesso.',
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
//             'SELECT * FROM evento WHERE id = ?',
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
    const evento = {
        id: req.body.id,
        nome: req.body.nome,
        local: req.body.local,
        endereco: req.body.endereco,
        data: req.body.data,
        convidado: req.body.convidado,
        edicao: req.body.edicao
    };

    mysql.getConnection((error, conn) => {
        if (error) return res.status(500).send({ error: error });

        conn.query(
            'UPDATE evento SET nome = ?, local = ?, endereco = ?, data = ?,convidado = ?,edicao = ? WHERE id = ?',
            [evento.nome, evento.local,evento.endereco,evento.data,evento.convidado,evento.edicao, evento.id],
            (error, result, field) => {
                conn.release();
                if (error) return res.status(500).send({ error: error });

                res.status(200).send({
                    message: 'Evento atualizado com sucesso.'
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
            'DELETE FROM evento WHERE id = ?',
            [id],
            (error, result, fields) => {
                if (error) return res.status(500).send({ error: error });
                
                res.status(200).send({ message: 'Evento removido com sucesso' });
            }
        );
    });
});


module.exports = router;