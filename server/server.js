const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;

const path = require('path')
const publicPath = path.join(__dirname,'..', 'build')

const anotherRoute = require('./Routes/another')

app.use(express.static(publicPath))

app.use(anotherRoute)

app.get('*', (req, res)=>{
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(PORT, ()=>{console.log('Server Started')})