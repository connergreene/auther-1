'use strict';

var router = require('express').Router();

router.post('', function(req, res, next){
	res.send(req.body);

})


module.exports = router;