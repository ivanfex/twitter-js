const express = require('express');
const app = express();
const volleyball = require('volleyball')
const nunjucks = require('nunjucks');
const routes = require('./routes');





app.use('/', routes);

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

nunjucks.configure('views', {noCache: true, autoescape: true, express: app})
app.use(express.static('public'));

app.use(volleyball)





app.listen(3000, () => console.log('Hello World!'));
