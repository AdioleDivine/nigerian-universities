const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('../Universities/routes/index')  
const dotenv = require('dotenv');


const app = express()

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
dotenv.config();
app.use(routes)


const PORT = process.env.PORT
const ENV  = process.env.NODE_ENV

app.listen(PORT, console.log(`Foodie's Api running in ${ENV} mode on port ${PORT}`))