const express = require ('express')
const actions = require ('../methods/actions')
const router = express.Router()

router.get('/universities', actions.getUniversities)


module.exports = router 