const express = require('express')
const Panir = require('../models/panir')
const Parson = require('../models/parson')
const router1 = express.Router()


router1.post('/panir', async (req, res) => {
    try{
        const data = req.body
        const newPanir= new Panir(data)
        const responce = await newPanir.save()
        res.status(200).json({responce})
    }catch(err){
        res.json({err})
    }
})


router1.post('/parson', async (req, res) => {
    try{
        const data =req.body
        const newParson =  new Parson(data)
        const responce = await newParson.save();
        console.log("data saved");
        res.status(200).json({responce})
    } catch(e){
        console.log(e);
        res.status(500).json({err: e});
    }
});

module.exports = router1