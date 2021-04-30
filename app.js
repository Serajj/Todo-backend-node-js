const express = require('express');

const app = express();


const mongoose = require('mongoose');
const { router } = require('./controller/todoController');
const bodyParser = require('body-parser');
const uri = "mongodb+srv://seraj_alam:Mongodb@123@cluster0.bcajl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, link) => {
    console.log("Connected sussessfully");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router)



app.get('/', (req, res, next) => {
    res.status(200).json({ success: true, message: "How are you ?" });
})

app.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});