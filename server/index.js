const express = require('express');
const app = express();
const exphbs = require('express')
const run = require('./db')



run().catch(err => console.log(err))

app.use(express.json());

app.set("view engine", "handlebars")

app.listen(7000, () => {
	console.log('server listening to port 7000')
}) 