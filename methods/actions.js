var universities = require('../uni.json')

var functions = {
 getBanks: function(req, res) {
     res.json({universities})
 }
}

module.exports = functions