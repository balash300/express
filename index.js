const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(require('./data.json'))
})


app.listen(3002, () => {
    console.log('File is saved!');
})