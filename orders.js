const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Orders were fetched'
    })
});
router.post('/',(req,res,next)=>{
    res.status(201).json({
        message:'Order was created'
    })
});

router.get('/:orderId',(req,res,next)=>{
    const id = req.params.productId;
    
        res.status(200).json({
            message:'Order details',
            orderId: req.params.orderId
        });
   
    
});
router.post('/:orderId',(req,res,next)=>{
        res.status(201).json({
            message:'order was created'
        })
});
router.patch('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:'order request updated'
    })
});
router.delete('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:'deleted '
    })
});
module.exports =router;