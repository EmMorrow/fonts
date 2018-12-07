const express = require('express');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))

let fonts = [];
let saved = [];
let id = 0;




// app.post('/saved', (req, res) => {
//   id = id + 1;
//   let font = {id:id, font: req.body.font};
//   saved.push(font);
//   res.send(font);
// });
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*")
  // res.header("Access-Control-Allow-Origin", "Origin")
  next()

});

app.get('/saved', (req, res) => {
  res.send(saved);
});

app.get('/fonts', (req, res) => {
  if (fonts.length == 0) {
    fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBJlUfLH58MJnqXQlyrnCCoIeihDcqVsfs&sort=popularity')
      .then((resp) => resp.json())
      .then(function(data){
        var i;
        for (i = 0; i < data.items.length; i++) {
          let combo = "\'" + data.items[i].family + "\'" + ", " + data.items[i].category
          let newFont = {family: data.items[i].family, category: data.items[i].category, pairing: combo};
          fonts.push(newFont);
        }
      });
  }
  res.send(fonts);
});

app.get('/font', (req, res) => {
  var index = Math.floor((Math.random() * fonts.length) + 0);
  res.send(fonts[index]);
});


app.listen(3000, () => console.log('Server listening on port 3000!'))
