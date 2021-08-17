const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors');
const url = 'mongodb://localhost:27017/Example'
const app = express()
app.use(cors());
app.use(express.urlencoded({
    extended: true,
    inflate: true,
    limit: '100kb',
    parameterLimit: 1000,
    type: 'application/x-www-form-urlencoded',
    verify: undefined
}));
app.use(express.json());
// app.post(
//     '/test',
//     (req, res) => res.json(req.body)
//   )
// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     req.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
// })
mongoose.connect(url, { useNewUrlParser: true })
mongoose.Promise = global.Promise;
const con = mongoose.connection

con.on('open', function () {
    console.log('Connected Successfully..')
})


const exampleRouter = require('./routes/example')
app.use('/example', exampleRouter)
app.listen(9000, function () {
    console.log('Server Started Successfully..')
})
module.exports = app;