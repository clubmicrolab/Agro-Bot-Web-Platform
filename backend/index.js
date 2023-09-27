import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './router.js';

const port = 3500;
const DB_URL = 'mongodb+srv://OlegSmac:olegandilie100S@cluster0.wn6bpni.mongodb.net/coordinates?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use('/api', router);

app.get('/', (req, res) => {
    console.log(req.query);
    res.json('Server is working now!');
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
        app.listen(port, () => {
            console.log('Server is working on port:' + port);
        })
    } catch(err) {
        console.log(err);
    }
}

startApp();
