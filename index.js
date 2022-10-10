const express = require('express');
const app = express();
const PORT = process.env.PORT ||3000;
const db = require('./db');
const routes = require("./src/routes/v1/routes");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// SET ROUTES
app.use('/api/v1', routes);
db.then((database) => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.listen(PORT, () => {
        console.log(`PORT USING ${PORT}`)
    })
}).catch(console.log);