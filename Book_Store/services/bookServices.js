const User = require('../model/bookModel');

exports.addBook = async (data) => {
    return await User.create(data);
}