import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/router'

const app = express();
const PORT = 4000;
const DB_COLLECTION_NAME = 'quotesDB'
const MONGO_URL = `mongodb+srv://dagul:dagul@cluster0-nsttw.mongodb.net/${DB_COLLECTION_NAME}?retryWrites=true&w=majority`

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//CORS setup
app.use(cors());

routes(app);

app.get('/', (req, res) =>
    res.send(`Our Words application is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your Words server is running on port ${PORT}`)
);

