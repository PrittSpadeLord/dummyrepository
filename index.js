require('dotenv').config();

const express=require('express');
const cors = require('cors');

const app=express();
app.use(cors());

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true, useUnifiedTopology: true});

const db=mongoose.connection;

db.on('error', (error)=>console.error(error));
db.once('open', () => console.log('Connected to Database'));
app.use(express.json( ));

const onebillRouter = require('./routes/api');
app.use('/api', onebillRouter);

var port = process.env.PORT||3214;
app.listen(port, ()=>console.log(`Listening! Please visit http://localhost:${port}/api once database is connected.`));
