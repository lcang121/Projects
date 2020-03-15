import mongoose from 'mongoose';
import { highScoreSchema } from '../models/highScoreModel';

const HighScore = mongoose.model('highscore', highScoreSchema, 'highscore');

//GET controller
export const getHighScore = (req, res) => {
    HighScore.find({}, (err, HighScore) => {  //{find} is fcn inside monggoDb that will find all HighScore matching the HighScore schema
        if (err) {
            res.send(err);
        }
        res.json(HighScore);
        console.log(HighScore)
    });
};

// PUT controller
export const UpdateHighScore = (req, res) => {
    HighScore.findOneAndUpdate({ _id: req.params.HighScoreID },   // find the id to update coming from router
        req.body,                                           // pass updated info
        { new: true },                                      //so you can view updated HighScore
        (err, HighScore) => {  //{find} is fcn inside monggoDb that will find all HighScores
            if (err) {
                res.send(err);
            }
            res.json(HighScore);
        });
};
