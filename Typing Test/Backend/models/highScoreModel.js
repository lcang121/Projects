import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const highScoreSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    wpm: {
        type: Number,
        required: true
    }
});
