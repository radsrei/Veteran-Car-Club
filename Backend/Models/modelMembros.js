const mongoose = require('mongoose');

const MembroSchema = new mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,
    endereco: String,
    dataDeNascimento: Date,
    CPF: String,
    CEP: String,
});

module.exports = mongoose.model('Event', MembroSchema);