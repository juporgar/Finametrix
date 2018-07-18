var express = require('express');
var router = express.Router();
let UploadService = require('../services/uploadService');
let uploadService= new UploadService();
let upload = uploadService.up()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.post('/upload', upload.single('file'), (req, res, next) => {
  console.log('file')
  res.json('file')
})

module.exports = router;
