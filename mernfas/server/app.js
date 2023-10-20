
import express, { json } from 'express';
import {router} from './routes/posts.routes.js'
import fileUpload from 'express-fileupload'; 
const app = express();

app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir:'.uploads'
}))
app.use(router)



export default app