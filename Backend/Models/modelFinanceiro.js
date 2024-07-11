const mongoose = require('mongoose');

const FinanceiroSchema = new mongoose.Schema({
    entrada: Number,
    saida: Number,
    descricao: String,
});

module.exports = mongoose.model('Event', FinanceiroSchema);