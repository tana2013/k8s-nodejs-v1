var express = require('express');
var app = express();

app.get('/', (req, res)=>{
 res.send({"response":"Home Route ^^"})
})
app.get('/will', (req, res)=>{
    res.send({"response":" Hello World"})
})
app.get('/ready', (req, res)=>{
    res.send({"response":"Great it Works *^-^*"})
})
app.get('/admin', (req, res)=>{
    res.send({"response":"Admin Dashboard Route ^^"})
})

app.listen(process.env.PORT || 3000);
module.exports = app