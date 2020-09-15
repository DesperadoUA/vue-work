const mysql = require('mysql2/promise')
const config = require('../config')

class Model {
    static async getAllData() {
        const conn = await mysql.createConnection(config)
        const [rows] = await conn.execute("SELECT * FROM employees")
        conn.end()
        return rows
    }
    static async getDataById(id) {
        const conn = await mysql.createConnection(config)
		const [rows] = await conn.execute(`SELECT * FROM employees WHERE id='${id}'`)
		conn.end()
		return rows
    }
    static async updateDataById(id, data) {
		const conn = await mysql.createConnection(config)
		const [rows] = await conn.execute(`UPDATE employees 
		      SET 
		      name='${data.name}',
		      department='${data.department}', 
		      chief='${data.chief}',
		      thumbnail='${data.thumbnail}',
		      date='${data.date}',
		      text='${data.text}'  
		      WHERE id='${id}'`)
		console.log(rows)
		conn.end()
	}
	static async getData(limit, offset) {
		const conn = await mysql.createConnection(config)
		const [rows] = await conn.execute(`SELECT * FROM employees ORDER BY date DESC LIMIT ${limit} OFFSET ${offset}`)
		conn.end()
		return rows
	}
	static async totalCount() {
		const conn = await mysql.createConnection(config)
		const [rows] = await conn.execute(`SELECT COUNT(id) as id FROM employees`)
		conn.end()
		return rows[0]['id']
	}
	static async getFilters(field) {
		const conn = await mysql.createConnection(config)
		const [rows] = await conn.execute(`SELECT DISTINCT ${field} FROM employees`)
		conn.end()
		const result = []
		rows.forEach((item, i) => {
			const obj = {value: item, id: i}
			result.push(obj)
		})
		return result
	}
	static async getFiltersPosts(settings){
    	let query = 'WHERE '

		if(settings.name !== 'Все') query += `name LIKE '${settings.name}'`
		else query += `name LIKE '%'`

		if(settings.department !== 'Все') query += ` AND department LIKE '${settings.department}'`
		else query += ` AND department LIKE '%'`

		if(settings.chief !== 'Все') query += ` AND chief LIKE '${settings.chief}'`
		else query += ` AND chief LIKE '%'`

		const conn = await mysql.createConnection(config)
		const [rows] = await conn.execute(`SELECT * FROM employees ${query}`)
		conn.end()
		return rows
	}
	static async addPost(data) {
    	let query = `INSERT INTO employees (name, department, chief, thumbnail, text)
		VALUES ('${data.name}', '${data.department}', '${data.chief}', '${data.thumbnail}', '${data.text}')`
		const conn = await mysql.createConnection(config)
		const [ResultSetHeader] = await conn.execute(query)
		let result = {status: 'error', id: ''}
		if(ResultSetHeader.insertId) result = {status: 'ok', id: ResultSetHeader.insertId}
		conn.end()
		return result
	}
	static async deletePost(id) {
		let query = `DELETE FROM employees WHERE id='${id}'`
		const conn = await mysql.createConnection(config)
		let [ResultSetHeader] = await conn.execute(query)
		let result = {status: 'error'}
		if(ResultSetHeader.serverStatus === 2) {
			result = {status: 'ok'}
		}
		conn.end()
		return result
	}
}
module.exports = Model