const express = require ('express')
const actions = require ('../methods/actions')
const router = express.Router()

router.get('/', actions.getBanks)

router.post('/search', actions.search)

module.exports = router 