const mongoose = require('mongoose');

let dummyModel = mongoose.Schema({

})

module.exports = mongoose.model("dummyModel", dummyModel)
