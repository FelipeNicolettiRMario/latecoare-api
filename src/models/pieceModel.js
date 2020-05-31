const mongoose = require('mongoose');

const scheema = mongoose.Schema({
    id:'string',
    src:'string',
    src_img:'string'
});

module.exports = mongoose.model("Piece",scheema);