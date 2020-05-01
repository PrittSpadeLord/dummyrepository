//Express

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var port = process.env.PORT||8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Listening on Port ${port}! Do not open the website until database has been connected!`);
});

app.get('/', (req, res) => {
    res.render(__dirname + '/public/main.ejs', {test});
});

app.post('/addelement', (req, res) => {
    //console.log(req.body);
    test.list.push(req.body);
    db.collection('test').save(test, (err, result) => {
        console.log('saved!')
    });
    res.redirect('/');
});

app.post('/removeelement', (req, res) => {
    //console.log(req.body);
    for(var i=0; i<test.list.length; i++) {
        if(test.list[i].name == req.body.name) {
            test.list.splice(i, 1);
        }
    }
    db.collection('test').save(test, (err, result) => {
        console.log('saved!')
    });
    res.redirect('/');
});

//MongoDB

const MongoClient = require('mongodb').MongoClient;
/*
var test = {
    list: [
        {
            name: 'Sample Name',
            value: 'sample value'
        }
    ]
}
*/
var test;
var db;

MongoClient.connect('insert-url-here', {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) console.log(err);

    console.log('Connected to Database! View this website on http://localhost:8080/');
    db = client.db('onebill');

    db.collection('test').find().toArray((err, result) => {
        test = result[0];
    });
});