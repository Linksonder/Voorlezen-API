const mongoose = require('mongoose');

let bookSchema = new mongoose.Schema({
    name: { type: String },
    createdOn: { type: Date },
    createdBy: { type: String},
    chapters: [{
        _id: { type: mongoose.Types.ObjectId},
        name: { type: String },
        recorededBy: { type: String },
        soundBlob: { type: String }
    }]
});

mongoose.model('Book', bookSchema);

module.exports = bookSchema;