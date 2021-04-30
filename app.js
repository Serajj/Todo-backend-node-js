const express = require('express');

const app = express();


const mongoose = require('mongoose');
const { router } = require('./controller/todoController');
const bodyParser = require('body-parser');
const uri = "mongodb+srv://seraj_alam:Mongodb@123@cluster0.bcajl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     console.log("Mongodb connected");
//     client.close();
// });

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, link) => {
    console.log("Connected sussessfully");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use('/api', router)



app.get('/', (req, res, next) => {

    res.send("Hello");
})

app.listen(3000, () => {
    console.log("App running at port 3000");
})