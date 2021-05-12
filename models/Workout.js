const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workOutSchema = new Schema({
    day: {
        type: Date,
        exercises: [
            {type: String},
            {name: String},
            {duration: Number},
            {weight: Number},
            {reps: Number},
            {sets: Number},
            {distance: Number}
        ]
    }
});

const Transaction = mongoose.model('Transaction', workOutSchema)

module.exports = Transaction;