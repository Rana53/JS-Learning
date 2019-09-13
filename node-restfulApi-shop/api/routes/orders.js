const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'orders was created'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request in orders api'
    });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: `Handling GET request in orders api with id ${id}`
    });
});

router.delete('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: `Handling DELETE request in orders api with id ${id}`
    });
});

module.exports = router;