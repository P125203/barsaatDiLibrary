const mongoose = require('mongoose');

const Book = new mongoose.Schema({
    bookName: {
        type:String,
        required: true
    },
    bookCode: {
        type:String,
        required: true
    },
    bookAuthor: {
        type:String,
        required: true
    },
    bookPublisher: {
        type:String,
        required: true
    },
    bookPrice: {
        type:Number,
        required: true
    }
})

module.exports = mongoose.model('bookStore' , Book);