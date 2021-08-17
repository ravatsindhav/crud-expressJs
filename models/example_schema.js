const mongoose = require('mongoose')

const exampleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Ravats', exampleSchema)