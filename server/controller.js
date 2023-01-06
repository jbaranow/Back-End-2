const houses = require('./db.json')

let nextAvailableID = houses.length

module.exports = {
    getAllHouses: (req, res) => {
        res.status(200).send(houses)
    },
    createHouse(req, res) {
        const { address, price, imageURL } = req.body

        if (!address || !price || !imageURL){
            return res.status(400).send('Invalid request')
        }
        const newHouse = {
            address,
            price,
            imageURL
        }
    },
};

//getHouses(){}
//deleteHouse(){}
//createHouse(){}
//updateHouse(){}