const mongoose = require('mongoose');

const VeiculoSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    ano: String,
    placa: String,
    placaPreta: Boolean,
    cor: String,
    quilometragem: Number,
    membro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Membro'
    }
});

module.exports = mongoose.model('Finance', VeiculoSchema);