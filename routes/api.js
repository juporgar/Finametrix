var express = require('express');
var router = express.Router();
let Calcu = require('../helpers/calcu');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Index'
    });
});

router.get('/performance', function (req, res, next) {
    // console.log(req.query.isin)
    // console.log(req.query.dateFrom)
    // console.log(req.query.dateTo)

    let calcu = new Calcu(req, res, next)
    calcu.performance();
    calcu.volatility();
})

module.exports = router;