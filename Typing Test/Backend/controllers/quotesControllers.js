import mongoose from 'mongoose';
import { quotesSchema } from '../models/quotesModel';

const Quotes = mongoose.model('quotes2', quotesSchema, 'quotes2');

//GET controller
export const getQuotes = (req, res) => {
    Quotes.find({}, (err, Quotes) => {  //{find} is fcn inside monggoDb that will find all Quotes matching the Quotes schema
        if (err) {
            res.send(err);
        }
        res.json(Quotes);
        console.log(Quotes)
    });
};



