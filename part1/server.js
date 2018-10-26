var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.get('/yourroute', function(req, res) {
  res.send("stuff");
});

app.get('/hello', function(req, res){
  console.log('get request')
  res.send('Hello!');
});

app.post('/create/:cat', function(req, res){
 let dog = {
    id :1,
     cat : req.params.cat
    }
    res.json(dog);
});

app.get('/', function(req, res){
  res.sendFile('/Users/dhutc/Documents/Galvanize/Q2/expressIntroChallenges/part1/index.html', function(err){
    if (err) {
      console.log(err)
    } else {
      console.log('file sent')
    }
  });
});

app.get('/verify/:age', function(req, res){
  let thing = req.params.age
  if (thing >= 13){
    res.sendStatus(200)
  } else {
    res.sendStatus(403)
  }
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
