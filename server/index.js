import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';


const app = express();

//to reach a post need to add /posts after localhost:5000


app.use(bodyParser.json({limit:"10mb", extended: true }));          
app.use(bodyParser.urlencoded({limit:"10mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://piyuagrawal:piyuag2000@cluster0.vtwsg.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// to avoid errer use use....
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => app.listen(PORT, () => console.log(`server running: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
