const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')

const app = express();

app.use(express.json({extended: true}));
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/links', require('./routes/link.routes'))

const PORT = config.get('port') || 5000;

async function start(req, res, next) {
    try {
        await mongoose.connect(config.get('mongoUri'), { 
            
        })
        app.listen(PORT, ()=>{
            console.log(`App has been listened on port ${PORT}...`);
        })
    }catch(err) {
        console.log("Server ERROR", err);
        process.exit(1);
    }
}
start();

