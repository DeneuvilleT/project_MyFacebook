import { fileURLToPath } from "url";
import path from "path";
import express from 'express';
import 'dotenv/config';
import router from './routes/index.js';


const app = express();
const PORT = process.env.PORT || process.env.SERVER_LOCAL_PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(router);
app.listen(PORT, () => {
   console.log(`Listening a http://localhost:${PORT}`);
});