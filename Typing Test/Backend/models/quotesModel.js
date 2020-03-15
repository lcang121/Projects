import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const quotesSchema = new Schema({
    quotes: [{ quote: String, author: String }]

});


