const express = require('express')
const cors = require('cors')
//const houses = require('./db.json')
const houseController = require('./controller.js')

console.log({ houseController });

const app = express()

const baseURL = 4004

app.use(express.json())
app.use(cors())

app.get('/api/houses', houseController.getAllHouses);
app.post('/api/houses')

app.listen(baseURL, () => console.log(`Server running on port ${baseURL}`))