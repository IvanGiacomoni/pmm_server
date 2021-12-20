const express = require('express')
const router = express.Router()
const config = require('config')
const nodemailer = require("nodemailer");

const Prodotti=['Bracciale','USB','Powerbank','Scatola']
const Quantity=[3,5,0,4]

i=0
router.get('/', async (req,res) => {  

    if(i>=Prodotti.length)
        i=0
    var prodotto=Prodotti[i]
    var quant=Quantity[i]
    var costo= Math.floor(Math.random() * 10);

    res.status(200).send("<?xml version='1.0'?><Product_List>  <ProductCost>"+costo+"</ProductCost>    <ProductId>'"+i+"'</ProductId>    <ProductName>'"+prodotto+"'</ProductName>    <Quantity>"+quant+"</Quantity>  </Product_List>")
    i=i+1
})



router.post('/sendEmail/:CustomerEmail/:CustomerName/:CustomerSurname/:message',async (req,res)=>{
    var email=req.params.CustomerEmail
    var name=req.params.CustomerName
    var surname=req.params.CustomerSurname
    var message=req.params.message

    let transporter = nodemailer.createTransport({
        host: "smtp.libero.it",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "progetto_pmm@libero.it", // generated ethereal user
          pass: "Progettopmm2022.", // generated ethereal password
        },
      });
      
      let info = await transporter.sendMail({
        from: "progetto_pmm@libero.it", // sender address
        to: email, // list of receivers
        subject: "Order Info", // Subject line
        text: "Dear "+ name+" "+ surname+", \n"+message , // plain text body

      });
    
    
    res.status(200).send("<?xml version='1.0'?><done>'Fatto'</done>")
})




router.get('/sendPrototype/:CustomerEmail/:CustomerName/:CustomerSurname/:customization',async (req,res)=>{
    var email=req.params.CustomerEmail
    var name=req.params.CustomerName
    var surname=req.params.CustomerSurname
    var customization=req.params.customization


    let transporter = nodemailer.createTransport({
        host: "smtp.libero.it",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "progetto_pmm@libero.it", // generated ethereal user
          pass: "Progettopmm2022.", // generated ethereal password
        },
      });
      
      let info = await transporter.sendMail({
        from: "progetto_pmm@libero.it", // sender address
        to: email, // list of receivers
        subject: "Order Info", // Subject line
        text: "Dear "+ name+" "+ surname+", \n"+"this is your prototype: "+customization , // plain text body

      });

      var resp=Math.floor(Math.random() * 2);

      console.log(resp)
      if(resp==0)
        resp=false
      else
        resp=true

    
    res.status(200).send("<?xml version='1.0'?><response>"+resp+"</response>")
})





router.get('/sendRequest/shipment/:CustomerEmail/:CustomerName/:CustomerSurname',async (req,res)=>{
    var email=req.params.CustomerEmail
    var name=req.params.CustomerName
    var surname=req.params.CustomerSurname
   

    let transporter = nodemailer.createTransport({
        host: "smtp.libero.it",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "progetto_pmm@libero.it", // generated ethereal user
          pass: "Progettopmm2022.", // generated ethereal password
        },
      });
      
      let info = await transporter.sendMail({
        from: "progetto_pmm@libero.it", // sender address
        to: email, // list of receivers
        subject: "Order Info", // Subject line
        text: "Dear "+ name+" "+ surname+", \n"+"What kind of shipment do you want? Shipment or in shop" , // plain text body

      });

      var resp=Math.floor(Math.random() * 2);

      console.log(resp)
      if(resp==0)
        resp=false
      else
        resp=true

    
    res.status(200).send("<?xml version='1.0'?><response>"+resp+"</response>")
})

module.exports = router
