const express = require('express');
const dB = require('./middleware/dB');
const app = express();
const router = require('./routes/bookRouter')

app.use(express.json());

dB.connectToDB();


app.use('' , router);

app.listen(5000, () => {
    console.log('Connected To Server');
})