const {Router} = require('express')
const router = Router()
const Model = require('../models/model')

router.get('/', async (req, res) => {
    const data = await Model.getAllData()
    res.send(JSON.stringify(data))
})
router.post('/', async (req, res) => {
	const data = await Model.getAllData()
	res.send(JSON.stringify(data))
})
module.exports = router