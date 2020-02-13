const express = require('express')
const route = express();

route.get('/api/users', (req,res)=>{
    res.send('Hello')
})

module.exports = route