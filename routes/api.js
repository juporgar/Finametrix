var express = require('express');
var router = express.Router();
let Calcu = require('../helpers/calcu');
let ControladorBase = require('../controllers/api/controladorBase')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Index'
    });
});

router.get('/performance', function (req, res, next) {
    let controladorBase = new ControladorBase(req, res, next)
    controladorBase.compararBase()
})

module.exports = router;