const express = require('express');
const app = express();
//const PORT = require('./config');
const db = require('./db');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller');
const bodyParser = require('body-parser');
db.sync({force: true});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'));
app.use('/api/game', game);
app.listen('4000',function() {
  console.log("App is listening on 4000");
});