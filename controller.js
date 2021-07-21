const houses = require('./db.json')

let houseId = 4;


module.exports = {

    getAllHouses: (req, res) => {
        res.status(200).send(houses)
    },


    deleteHouse: (req, res) => {
        // const { id } = req.params
        // console.log(req.params)
        const tgtIndex = houses.findIndex((housesObj) => {
            return housesObj.id === +req.params.id;
        })
        houses.splice(tgtIndex, 1)
        res.status(200).send(houses)
    },


    createHouse: (req, res) => {
        let { address, price, imageURL } = req.body;
        let newHouse = {
            id: houseId,
            address: address,
            price: price,
            imageURL: imageURL
        }
        houses.push(newHouse)

        res.status(200).send(houses)
        houseId++
    },



    updateHouse: (req, res) => {
        const { id } = req.params;
        const { type } = req.body;

        const tgtIndex = houses.findIndex((housesObj) => {
            return housesObj.id === +id;
        })
        if (type === 'plus') {
            houses[tgtIndex].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[tgtIndex].price -= 10000
            res.status(200).send(houses)
        } else {
            res.status(400).send('Values should be plus or minus')
        }
    }
}