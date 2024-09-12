const express = require('express')
const Panir = require('../models/panir')

const authmiddleware = require('../models/authmiddleware')
const router = express.Router()
 

router.get('/panir',authmiddleware, async (req, res) => {
    const data = await Panir.find({'name': "parvez alama2"})
    res.status(200).json({data})
})

router.get('/panir/:id', async (req, res) => {
    const data = req.params.id
    console.log({data});
    res.json({data})
    
})

module.exports = router