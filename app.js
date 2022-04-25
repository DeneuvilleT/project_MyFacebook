import { fileURLToPath } from "url";
import path from "path";
import express from 'express';
import mysql from 'mysql';
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || process.env.SERVER_LOCAL_PORT;
const { HOST_DB, DATABASE_NAME, USERNAME_DB, PASSWORD_DB } = process.env;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const pool = mysql.createPool({
   connectionLimit: 10000,
   host: HOST_DB,
   database: DATABASE_NAME,
   user: USERNAME_DB,
   password: PASSWORD_DB,
});


// Home Page ************************************************************************************************ 
app.get('/', (req, res) => {
   pool.query(`
   SELECT * FROM customers`, (error, results) => {
      if (error) {
         throw Error;
      } else {
         res.render("layout", { template: "home", data: results });
         console.log(data)
      }
   });
});



app.listen(PORT, () => {
   console.log(`Listening a http://localhost:${PORT}`);
});