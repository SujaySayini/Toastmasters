import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import speechRoutes from './routes/speech.js'
import deleteSpeechRoutes from './routes/deletespeech.js';

const app = express();



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/speech', speechRoutes);
app.use('/deletespeech', deleteSpeechRoutes);


const CONNECTION_URL = 'mongodb+srv://m220student:m220password@cluster0.lgpgi.mongodb.net/react-hero?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=>console.log('server running')))
    .catch((error)=>console.log(error.message));



