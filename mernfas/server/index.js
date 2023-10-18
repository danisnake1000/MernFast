import express from 'express';
import {router} from './routes/posts.routes.js' 
import { connectDB } from './db.js';
import { PORT } from './config.js';

const app = express();
connectDB()


app.use(router)
app.listen(PORT);
console.log(`Puerto escuchando`, PORT);