const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    item: String,
    qty: Number,
    isChecked: Boolean,
    date: Number,
    notes: String
})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;