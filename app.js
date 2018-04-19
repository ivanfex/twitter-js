const express = require('express');
const app = express();
const volleyball = require('volleyball')
 
app.use(volleyball)

// app.use('/', (req, res, next) => {
//     console.log(req.method + ' /');
//     console.log(req.method + ' / ' + res.statusCode);
//     next();
// })

// app.use('/:route', (req, res, next) => {
//     console.log(req.method + ' /' + req.params.route);
//     console.log(req.method + ' / ' + res.statusCode);
//     next();
// })

app.get('/', (req, res) => {
    res.send('Hello welcome to Richard\'s Nice Things Emporium!');
})

app.get('/news', (req, res) => {
    res.send('Kendrick Lamar won the Pulitzer Prize!');
})


app.listen(3000, () => console.log('Hello World!'));

