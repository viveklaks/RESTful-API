const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling GET requests to /products'
    })
});
router.post('/',(req,res,next)=>{
    const product={
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message:'Handling POST requests to /products',
        createdProduct: product
    })
});
router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    if(id.toLowerCase() ==='special'){
        res.status(200).json({
            message:'You discovered the special ID'
        });
    }else{
        res.status(200).json({
            message:'You discovered an ID'
        });
    }
    
});
router.post('/:productId',(req,res,next)=>{
        res.status(201).json({
            message:'Handling Create requests to /products'
        })
});
router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:'Handling Update requests to /products'
    })
});
router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:'Handling delete requests to /products'
    })
});
module.exports =router;