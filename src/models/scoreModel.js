const mongoose = require('mongoose');

const scheema = mongoose.Schema({
    tentativas:'int',
    aproveitamento:'float',
    erros:'string',
    ordem:['string']
});

module.exports = mongoose.model("Score",scheema);