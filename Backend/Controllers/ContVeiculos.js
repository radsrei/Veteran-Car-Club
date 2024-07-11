const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;



// get all
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) return res.status(500).send({ error: error });
        conn.query(
            'SELECT * FROM veiculo',
            (error, result, fields) => {
                if (error) return res.status(500).send({ error: error });
                
                res.status(200).send({ response: result });
            }
        );
    });
});

// create one
router.post('/', (req, res, next) => {
    const veiculo = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: req.body.ano,
        placa: req.body.placa,
        placaPreta: req.body.placaPreta,
        cor: req.body.cor,
        quilometragem: req.body.quilometragem
    };

    mysql.getConnection((error, conn) => {
        if (error) return res.status(500).send({ error: error });

        conn.query(
            'INSERT INTO veiculo (marca, modelo,ano,placa,placaPreta,cor,quilometragem) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [veiculo.marca, veiculo.modelo,veiculo.ano,veiculo.placa,veiculo.placaPreta,veiculo.cor,veiculo.quilometragem],
            (error, result, field) => {
                conn.release();
                if (error) return res.status(500).send({ error: error });

                res.status(201).send({
                    message: 'veiculo inserido com sucesso.',
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
//             'SELECT * FROM veiculo WHERE id = ?',
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
    const veiculo = {
        id: req.body.id,
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: req.body.ano,
        placa: req.body.placa,
        placaPreta: req.body.placaPreta,
        cor: req.body.cor,
        quilometragem: req.body.quilometragem
    };

    mysql.getConnection((error, conn) => {
        if (error) return res.status(500).send({ error: error });

        conn.query(
            'UPDATE veiculo SET marca = ?, modelo = ?, ano = ?, placa = ?,placaPreta = ?,cor = ?,quilometragem = ? WHERE id = ?',
            [veiculo.marca, veiculo.modelo,veiculo.ano,veiculo.placa,veiculo.placaPreta,veiculo.cor,veiculo.quilometragem, veiculo.id],
            (error, result, field) => {
                conn.release();
                if (error) return res.status(500).send({ error: error });

                res.status(200).send({
                    message: 'Veiculo atualizado com sucesso.'
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
            'DELETE FROM veiculo WHERE id = ?',
            [id],
            (error, result, fields) => {
                if (error) return res.status(500).send({ error: error });
                
                res.status(200).send({ message: 'Veiculo removido com sucesso' });
            }
        );
    });
});


module.exports = router;