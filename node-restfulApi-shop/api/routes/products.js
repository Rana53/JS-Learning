const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

router.get('/', (req, res, next) => {
  Product.find()
  .exec()
  .then(docs => {
    console.log("All document are: \n" + docs);
    res.status(200).json(docs);
  })
  .catch(err => {
    res.status(500).json({error: err});
  });
});

router.post('/', (req, res, next) => {
    const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      price: req.body.price
    });
    product.save()
    .then(result =>{
      console.log(result)
      res.status(200).json({
          message: 'Handling post request /product',
          createProduct: product
      });
    })
    .catch(err =>{
      console.log(err)
      res.status(500).json({error: err});
    });

});


router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
  //  .exec()
    .then(doc => {
      console.log("From database: " + doc);
      if(doc)
        res.status(200).json(doc);
      else
        res.status(404).json({message: "No valid data formate in this id"});
    })
    .catch(err => {
      console.log(err);
      res.status(200).json({error: err});
    });
});

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: `Handling PATCH request wiht product id ${id}`
    });
});

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: `Handling DELETE request wiht product id ${id}`
    });
});

module.exports = router;
