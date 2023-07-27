const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
 const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
