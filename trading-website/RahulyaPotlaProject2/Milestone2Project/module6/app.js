const express = require('express');
const morgan = require('morgan');
const tradeRoutes = require('./routes/trade_route/tradeRoutes');
const mainRoutes = require('./routes/main_route/main_routes');

const methodOverride = require('method-override')

const app = express();

let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'))

app.get('/', (req,res) => {
    res.render('index');
});

app.use('/', mainRoutes);
app.use('/trades', tradeRoutes);

app.use((req, res, next) => {
    let err = new Error('The server cannot locate ' + req.url)
    err.status = 404
    next(err)
})

app.use((err, req, res, next) => {
    if(!err.status) {
        err.status = 500;
        err.message = ("Internal Server Error")
    }
    res.status(err.status)
    res.render('error', {error: err})
})

app.listen(port, host, ()=> {
    console.log('Server is running on port', port);
})