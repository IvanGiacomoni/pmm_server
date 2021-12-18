const express = require('express')
const router = express.Router()
const config = require('config')

const Prodotti=['Bracciale','USB','Powerbank','Scatola']
const Quantity=[3,5,0,4]

i=0
router.get('/', async (req,res) => {  

    if(i>=Prodotti.length)
        i=0
    var prodotto=Prodotti[i]
    var quant=Quantity[i]
    var costo=Math.random()%10
    res.status(200).send("<?xml version='1.0'?><Product_List>  <ProductCost>"+costo+"</ProductCost>    <ProductId>'"+i+"'</ProductId>    <ProductName>'"+prodotto+"'</ProductName>    <Quantity>"+quant+"</Quantity>  </Product_List>")
    i=i+1
})





module.exports = router
