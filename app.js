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

app.use('/api', router)



app.get('/', (req, res, next) => {

    res.send("Hello");
})

app.listen(3000, () => {
    console.log("App running at port 3000");
})