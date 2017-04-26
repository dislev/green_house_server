import express from 'express';
let router = new express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {title: 'Express'});
});

module.exports = router;
