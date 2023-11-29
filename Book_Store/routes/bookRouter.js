const express = require('express');
const app = express();
const router = express.Router();
const bookController = require('../controller/bookController');

app.use('/home' , bookController.home)
app.use('/add' , bookController.add)
app.use('/delete' , bookController.delete)
app.use('/update' , bookController.update)
app.use('/replace' , bookController.replace)

app.use('' , router)
module.exports = app;