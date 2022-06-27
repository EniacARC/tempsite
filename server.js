//load .env variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

//dependencies (not using ES6 import do not switch!)
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')


const indexRouter = require('./routes/index') //set routes


app.set('view engine', 'ejs') //set the view engine
app.set('views', __dirname + '/views') //set the path for all the views
app.set('layout', 'layouts/layout') //set the layout path

app.use(expressLayouts) //get the app to use express layouts
app.use(express.static('public')) //set and use the static dependencies

//create moongose dependency and connect to database
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { 
useNewUrlParser: true,
useUnifiedTopology : true

})
// console.log(typeof(process.env.DATABASE_URL))

const db = mongoose.connection//get the conection to database
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to mongoose'))

app.use('/', indexRouter) //handle index route



app.listen(process.env.PORT || 3000) //listen to http requests