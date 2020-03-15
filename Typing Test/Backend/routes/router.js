import { getQuotes } from '../controllers/quotesControllers';
import { getHighScore, UpdateHighScore } from '../controllers/highScoreControllers';

const routes = (app) => {
    app.route('/quotes')
        .get(getQuotes) //GET endpoint

    app.route('/highScore')
        .get(getHighScore) //GET endpoint

    app.route('/highScore/:HighScoreID')
        .put(UpdateHighScore) //GET endpoint
}

export default routes;