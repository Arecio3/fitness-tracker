const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workOutSchema = new Schema({
    day: {
        type: Date,
        exercises: [
            {type:{ 
                type: String,
                required: true
            }},
            {name:{ 
                type:String,
                required: true
            }},
            {duration:{ 
                type:Number,
                required: true
            }},
            {weight:{
                type: Number,
                required: true
            }},
            {reps:{ 
                type:Number,
                required: true
            }},
            {sets:{ 
                type:Number,
                required: true
            }},
            {distance:{
                type: Number,
                required: true
            }}
        ]
    }
});

const Transaction = mongoose.model('Transaction', workOutSchema)

module.exports = Transaction;