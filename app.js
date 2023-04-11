const express=require('express');
const router = require('./Router/Router');
const app = express();
const cors=require('cors');

if(process.env.NODE_ENV == 'production'){
    const path=require('path')

    app.get('/',(req,res)=>{
        app.use(express.static(path.resolve(__dirname,'client','build')))
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.use(cors());
app.use(express.json());
app.use("/",router);

module.exports = app;
