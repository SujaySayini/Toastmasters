import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import speechRoutes from './routes/speech.js'
import deleteSpeechRoutes from './routes/deletespeech.js';
import timerRoutes from './routes/timer.js'
import commentCardRoutes from './routes/commentCards.js'
import evaluationRoutes from './routes/evaluation.js'
import ahCounterRoutes from './routes/ahcounter.js'
import signUpRoutes from './routes/user.js';
<<<<<<< HEAD
import pageRoutes from './routes/pages.js';
=======
import userRoutes from './routes/users.js';
>>>>>>> 9ec04c097cf2325da87f2adc7edc59286351c467


dotenv.config()

const app = express();




app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/timer', timerRoutes);
app.use('/speech', speechRoutes);
app.use('/deletespeech', deleteSpeechRoutes);
app.use('/commentcard', commentCardRoutes);
app.use('/evaluation', evaluationRoutes);
app.use('/ahcounter', ahCounterRoutes);
<<<<<<< HEAD
//app.use('/user', signUpRoutes);
app.use('/signup', signUpRoutes);
app.use('/pages', pageRoutes);
=======
app.use('/user', signUpRoutes);
//app.use('/signup', signUpRoutes);
//app.use('/users', userRoutes)
app.use('/users', userRoutes)

>>>>>>> 9ec04c097cf2325da87f2adc7edc59286351c467

const CONNECTION_URL = 'mongodb+srv://m220student:m220password@cluster0.lgpgi.mongodb.net/react-hero?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=>console.log('server running')))
    .catch((error)=>console.log(error.message));



