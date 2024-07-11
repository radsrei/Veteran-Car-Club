const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;



// get all
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) return res.status(500).send({ error: error });
        conn.query(
            'SELECT * FROM membro',
            (error, result, fields) => {
                if (error) return res.status(500).send({ error: error });
                
                res.status(200).send({ response: result });
            }
        );
    });
});

// create one
router.post('/', (req, res, next) => {
    const membro = {
        nome: req.body.nome,
        telefone: req.body.telefone,
        CPF: req.body.CPF,
        CEP: req.body.CEP,
        email: req.body.email,
        endereco: req.body.endereco,
        dataDeNascimento: req.body.dataDeNascimento
    };

    mysql.getConnection((error, conn) => {
        if (error) return res.status(500).send({ error: error });

        conn.query(
            'INSERT INTO membro (nome, telefone,CPF,CEP,email,endereco,dataDeNascimento) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [membro.name, membro.telefone,membro.CPF,membro.CEP,membro.email,membro.endereco,membro.dataDeNascimento],
            (error, result, field) => {
                conn.release();
                if (error) return res.status(500).send({ error: error });

                res.status(201).send({
                    message: 'Membro inserido com sucesso.',
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
            'SELECT * FROM membro WHERE id = ?',
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
    const membro = {
        id: req.body.id,
        nome: req.body.nome,
        telefone: req.body.telefone,
        CPF: req.body.CPF,
        CEP: req.body.CEP,
        email: req.body.email,
        endereco: req.body.endereco,
        dataDeNascimento: req.body.dataDeNascimento
    };

    mysql.getConnection((error, conn) => {
        if (error) return res.status(500).send({ error: error });

        conn.query(
            'UPDATE membro SET nome = ?, telefone = ?, CPF = ?, CEP = ?,email = ?,endereco = ?,dataDeNascimento = ? WHERE id = ?',
            [membro.nome, membro.telefone,membro.CPF,membro.CEP,membro.email,membro.endereco,membro.dataDeNascimento, membro.id],
            (error, result, field) => {
                conn.release();
                if (error) return res.status(500).send({ error: error });

                res.status(200).send({
                    message: 'Membro atualizado com sucesso.'
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
            'DELETE FROM membro WHERE id = ?',
            [id],
            (error, result, fields) => {
                if (error) return res.status(500).send({ error: error });
                
                res.status(200).send({ message: 'Membro removido com sucesso' });
            }
        );
    });
});


module.exports = router;