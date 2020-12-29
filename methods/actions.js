var universities = require('../uni.json')

var functions = {
 getUniversities: function(req, res) {
    const pageSize = 20
    const page = Number(req.query.page) || 1


    res.status(200).json({
        success: true,
        count: universities.length,
        universities, 
    })
 },
}

module.exports = functions