const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    item: String,
    qty: Number,
    isChecked: Boolean,
    date: Date
})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;