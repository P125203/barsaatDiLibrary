const bookServices = require('../services/bookServices');
const bookModel = require('../model/bookModel');

exports.home = async (req , res) => {
    try{
        const abc = await bookModel.find();
        console.log(abc)
        res.send(abc)
    }catch(err){
        console.log(err)
    }
}

exports.add = async (req ,res) => {
    try{
        const inputdata = req.body;
        const addBook = await bookServices.addBook(inputdata);
        res.status(200).json({ msg : 'Created Successfully', data : addBook})
    }catch(err){
        res.status(500).json({msg : 'Not Created' })
    }
}

exports.delete = async (req ,res) => {
    try{
        const bookCode = req.body.bookCode;
        const user = await bookModel.findOneAndDelete({bookCode : bookCode})

        if(user){
            res.status(200).json({msg : "Deleted Successfully" , user})
        }else{
            res.status(404).json({msg : "Not Found"})   
        }

    }catch(err){
        console.log(err)
        res.status(404).json({msg : "Not Found"})
    }
}

exports.update = async (req ,res) => {
    try{
        var { bookName , bookCode , bookAuthor , bookPublisher , bookPrice } = req.body
        const user = await bookModel.findOne({bookCode : bookCode})
        console.log(req.body)
        if(!user){
            res.status(404).json({msg : "No User"})
        }
        if(!bookName){
            bookName = user.bookName
        }
        if(!bookAuthor){
            bookAuthor = user.bookAuthor
        }
        if(!bookPublisher){
            bookPublisher = user.bookPublisher
        }
        if(!bookPrice){
            bookPrice = user.bookPrice
        }
        await bookModel.updateOne({bookCode : bookCode} , {bookName , bookCode , bookAuthor , bookPublisher , bookPrice})
        res.status(200).json({msg : "Successfully updated"})
    }catch(err){
        res.status(500).json({msg : "Unable to update"})
    }
}

exports.replace = async (req ,res) => {
    try{
        const { bookName , bookCode , bookAuthor , bookPublisher , bookPrice } = req.body
        const replacement = {
        bookName : bookName,
        bookCode : bookCode,
        bookAuthor : bookAuthor,
        bookPublisher : bookPublisher,
        bookPrice : bookPrice
    }
        const user = await bookModel.findOneAndReplace({bookCode : bookCode} , replacement);
        if(user){
            res.status(200).json({msg : "Replaced Successfully"})
        }
    }catch(err){
        res.status(500).json({msg : "Unable to Replace"})
    }
}