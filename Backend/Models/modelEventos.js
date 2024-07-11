const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    local: String,
    endereco: String,
    data: Date,
    convidado: Boolean,
    edicao: String
});

module.exports = mongoose.model('Event', EventSchema);
