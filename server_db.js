const express = require('express');
const app = express();
const port = 3000;
const bodyParser=require('body-parser');

const router = require('./routs/newRouts');
const router1 = require('./routs/postRoutes');
const Parson = require('./models/parson');
const db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(router)
app.use(router1)

app.get('/parson', async (req, res) => {
    const data = await Parson.find({})
    res.json({data})
})

app.post('/', (req, res) => {
    res.status(200).send("hello");
    console.log("post send", req.body)
});

// Starting the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
