const express = require('express');
const app = express();
const volleyball = require('volleyball')
const nunjucks = require('nunjucks');

let locals = {
  title: 'An Example',
  people: [
    {name: 'Gandalf'},
    {name: 'Frodo'},
    {name: 'Hermione'},
    {name: 'Sam'}
  ]
};

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

nunjucks.configure('views', {noCache: true, autoescape: true, express: app})

// nunjucks.render('index.html', locals, function(err, output) {
//   console.log(output);
// })

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
    // res.send('Hello welcome to Richard\'s Nice Things Emporium!');
    res.render('index', locals)
    // res.render('views/index.html');
})

app.get('/news', (req, res) => {
    res.send('Kendrick Lamar won the Pulitzer Prize!');
})


app.listen(3000, () => console.log('Hello World!'));
