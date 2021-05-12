const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
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

const Transaction = mongoose.model('Transaction', transactionSchema)