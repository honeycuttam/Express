const express = require('express');
const promotionRouter = express.Router();

promotionRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send ${req.params.promotionId} promotion to you`);
})
.post((req, res) => {
    res.end(`Will add promotion ${req.params.promotionId} with name ${req.body.name} and description ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on ${req.params.promotionId}`);
})
.delete((req, res) => {
    res.end(`Deleting promotion ${req.params.promotionId}`);
});

promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promotions to you');
})
.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res) => {
    res.end('Deleting all promotions');
});

module.exports = promotionRouter;