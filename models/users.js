const mysql = require('mysql2/promise')
const config = require('../config')

class Model {
    static async checkLogin(login, password) {
        const conn = await mysql.createConnection(config)
        const [rows] = await conn.execute(`SELECT * FROM users WHERE login='${login}' and password='${password}'`)
        conn.end()
        return rows
    }
}
module.exports = Model