const express = require('express')
const router = express.Router()
const config = require('config')


router.get('/', async (req,res) => {  
    res.status(200).send("<?xml version='1.0'?><Product_List>  <ProductCost>5</ProductCost>    <ProductId>'1'</ProductId>    <ProductName>'Bracciale'</ProductName>    <Quantity>4</Quantity>  </Product_List>")
})



router.get('/2', async (req,res) => {  
    res.status(200).send("<?xml version='1.0'?><Product_List>  <ProductCost>10</ProductCost>    <ProductId>'2'</ProductId>    <ProductName>'Bracciale'</ProductName>    <Quantity>4</Quantity>  </Product_List>")
})

module.exports = router
