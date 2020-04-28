const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const azureBlobService = require('../services/azureBlob.service');

let Book = mongoose.model('Book');


/* GET home page. */
router.get('/', function(req, res, next) {
    Book.find().exec((err, books) => {
        res.json(books);
    })
});

  /* GET home page. */
router.post('/', function(req, res, next) {
    let book = new Book(req.body);
    book.createdOn = new Date();
    book.save((err, book) => {
        res.json(book);
    })
});

/* GET home page. */
router.post('/books/:id/chapters', function(req, res, next) {
    let book = book.find({_id: req.params.id});
    let chapter = Object.assign({}, req.body);
    chapter._id = mongoose.Types.ObjectId();
    book.chapters.push(req.body);
    book.save((err, book) => {
        azureBlobService.storeBlob(req.body.blob).then(blob => {
            res.json(book);
        })
    })
});

router.get('/book/:bookId/chapters/:id/blob/:url', function(req, res, next){
    azureBlobService.getBlob(req.params.url).then(blob => {
        res.json(blob);
    })
});

router.delete('/:id', (req, res, next) => {
    Book.deleteOne({ _id: req.params.id })
        .exec((err) => {
            if(err) res.sendStatus(500);    
            res.sendStatus(200);
        });
})

module.exports = router;