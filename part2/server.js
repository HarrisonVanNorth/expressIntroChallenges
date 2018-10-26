var express = require('express');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 8000;

app.get('/yourroute', function(req, res) {
  res.send("stuff");
});

//challenge 1

app.post('/create/:name/:age', function(req, res){
  let user = {
    name: req.params.name,
    age: parseInt(req.params.age)
  }

  let raw = fs.readFileSync('./storage.json','utf8')
  let content;
  if (raw === ''){
    content = [];
  } else {
  content = JSON.parse(raw)
  }
  content.push(user);
  console.log(content);
  fs.writeFileSync('./storage.json', JSON.stringify(content))
  res.send('done')
});

//challenge 2

app.get('/', (req, res)=>{
  let data = fs.readFileSync('./storage.json', 'utf8');
  console.log(data)
  res.send(data)
});

//challenge 3

app.get('/:name', (req,res)=>{
  let data = fs.readFileSync('./storage.json', 'utf8');
  let content = JSON.parse(data);
  let result = content.filter(item => item.name === req.params.name)[0];
  if (result){
    res.json(result)
  } else {
    res.sendStatus(400)
  }
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});

