
import express, { json } from 'express';
import {router} from './routes/posts.routes.js' 
const app = express();

app.use(express.json())
app.use(router)



export default app