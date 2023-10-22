import app from './app.js'
import { connectDB } from './db.js';
import { PORT } from './config.js';


  connectDB()


app.listen(5000);
 console.log(`Puerto escuchando`, PORT);