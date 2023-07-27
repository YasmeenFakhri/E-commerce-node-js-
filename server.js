require('./config/db')
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require("morgan");
const cors = require("cors") ;
const app = express();
const authRoutes =  require("./routes/authRoute")

//i don't understand ?
dotenv.config();
 
//port
const port = process.env.PORT || 8080;


app.use(cors()) ;
app.use(express.json());
app.use(morgan("dev"));


app.use('/api/v1/auth' , authRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
   
    console.log(`E_Commerce app listening at http://localhost:${port}`);
})