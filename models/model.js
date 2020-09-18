const mysql = require('mysql2/promise')
const config = require('../config')

class Model {
    static async getAllData() {
        const conn = await mysql.createConnection(config)
        const [rows] = await conn.execute("SELECT * FROM casinos")
        conn.end()
        return rows
    }
}
module.exports = Model