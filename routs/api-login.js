const {Router} = require('express')
const router = Router()
const UsersModel = require('../models/users')

router.post('/', async (req, res) => {
	const data = {
		'status': '',
		'confirm': 'not found'
	}
	const [rows] = await UsersModel.checkLogin(req.body.login, req.body.password)
	if(rows) {
		data.status = rows.status
		data.confirm = 'ok'
	}
	res.send(JSON.stringify(data))
})

module.exports = router