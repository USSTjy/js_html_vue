var express = require('express');
var router = express.Router();
var Mock = require('mockjs')

/* GET testmock listing. */
router.post('/', function(req, res, next) {
    console.log('===',req.body)
    var data = Mock.mock({
        'list|1-10':[{
            'id|+1':1
        }]

    })
    return res.json(data)

});

router.get('/test2', function(req, res, next) {
    console.log(req.body)
    var data = Mock.mock({
        'name|1-10':[{
            'id|+1':1
        }]

    })
    return res.json(data)

});

module.exports = router;
