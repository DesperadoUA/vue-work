const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const apiRoutes = require('./routs/api')
const apiLogin = require('./routs/api-login')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use('/api', apiRoutes)
app.use('/api-login', apiLogin)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is Run on port ${PORT}`)
})