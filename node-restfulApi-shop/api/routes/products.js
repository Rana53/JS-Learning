const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({
        message: 'Handling post request',
        createProduct: product
    });
});


router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: `Handling GET request wiht product id ${id}`
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