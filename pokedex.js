const dotenv = require('dotenv');
const express = require('express');
dotenv.config();

const router = require('./src/router');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(express.static('public'));

// Middleware for parsing incoming requests with urlencoded payloads
app.use(express.urlencoded({
    extended: true
}));

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Listining at http://localhost:${PORT}`);
});