const mongoose = require('mongoose');
const config = require('config');

const uri = config.get('DB_STRING');

exports.connectToDB = () => {
    mongoose.connect(uri, {
    })
    .then(() => 
        console.log("connected to DB")
    ).catch((err)=> 
        console.log(err)
    )
}