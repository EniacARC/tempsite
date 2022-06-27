//set expresss and router

const express = require('express')
const router = express.Router()

//set route for index
router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router