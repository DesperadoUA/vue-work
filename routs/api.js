const {Router} = require('express')
const router = Router()
const EmployeesModel = require('../models/employees')

router.get('/', async (req, res) => {
    const data = await EmployeesModel.getAllData()
    res.send(JSON.stringify(data))
})
router.post('/', async (req, res) => {
	const limit = req.body.limit
	const offset = req.body.offset
	const data = await EmployeesModel.getData(limit, offset)
	res.send(JSON.stringify(data))
})
router.post('/id', async (req, res) => {
	const data = {
		status: '404',
		data: ''
	}
	const id = req.body.id
	const [rows] = await EmployeesModel.getDataById(id)
	if(rows) {
		data.status = '200'
		data.data = rows
	}
	res.send(JSON.stringify(data))
})
router.post('/edit', async (req, res) => {
	const id = req.body.id
	const data = req.body.data
	const result = EmployeesModel.updateDataById(id, data)
	const request = {
		status: 'ok',
		result: '200'
	}
	res.send(JSON.stringify(request))
})
router.post('/total', async (req, res) => {
	const result = await EmployeesModel.totalCount()
	const request = {
		status: 'ok',
		count: result
	}
	res.send(JSON.stringify(request))
})
router.post('/filters', async (req, res) => {
	const names = await EmployeesModel.getFilters('name')
	const department = await EmployeesModel.getFilters('department')
	const chiefs = await EmployeesModel.getFilters('chief')

	const request = {
		status: 'ok',
		name: names,
		department,
		chief: chiefs
	}
	res.send(JSON.stringify(request))
})
router.post('/filters-post', async (req, res) => {
	const settings = req.body
	const data = await EmployeesModel.getFiltersPosts(settings)
	const request = {
		status: 'ok',
		posts: data
	}
	res.send(JSON.stringify(request))
})
router.post('/add', async (req, res) => {
	const data = req.body
	const response = await EmployeesModel.addPost(data)
	res.send(JSON.stringify(response))
})
router.post('/delete', async (req, res) => {
	const id = req.body.id
	const response = await EmployeesModel.deletePost(id)
	res.send(JSON.stringify(response))
})
module.exports = router