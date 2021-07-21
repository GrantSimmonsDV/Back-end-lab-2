const express = require("express");
const cors = require("cors");
const app = express();
const ctrl = require('./controller');


app.use(cors());
app.use(express.json());

app.get('/api/houses', ctrl.getAllHouses)
app.delete('/api/houses/:id', ctrl.deleteHouse)
app.post('/api/houses', ctrl.createHouse)
app.put('/api/houses/:id', ctrl.updateHouse)


app.listen(4003, () => {
    console.log('Server running on 4003')
})