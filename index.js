var express = require('express');
var app = express();

app.get('/', (req, res)=>{
 res.send("Home Route ^^")
})
app.get('/login', (req, res)=>{
    res.send("Login Route ^^")
})
app.get('/admin', (req, res)=>{
    res.send("Admin Dashboard Route ^^")
})

app.listen(process.env.PORT || 3000);
module.exports = app