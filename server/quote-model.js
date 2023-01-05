var mongoose = require('mongoose');

// schema
var QuoteSchema = new mongoose.Schema({
    id: {
        type: 'String',
        unique: true,
        required: true
    },
    quote: 'String',
    author: 'String'
});

module.exports = mongoose.model("my-quotes", QuoteSchema);